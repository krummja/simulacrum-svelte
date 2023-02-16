---
id: ki98bx2trypz0h2lw4834ux
title: Monday SDK
desc: ''
updated: 1666384218335
created: 1666364461218
---

## Writing Usable Services

The `monday-sdk-js` node package is a small library that sets up a browser-window environment for processing specific requests that are passed to the actual monday.com backend GraphQL API. It does this by registering calls to the API as window event listeners that are sequentially executed whenever a new request is made.

For example, I might request the value of a specific column for a specific item on a monday board. To do this, I would write a service function that makes this request of the monday.com API in the form of a GraphQL query.

```js
async function getColumnValueService(token, itemId, columnId)
{
  try {
    const mondayClient = initMondayClient();
    mondayClient.setToken(token);

    const query = 
      `query ($itemId: [Int], $columnId: [String]) {
        items (ids: $itemId) {
          column_values (ids:$columnId) {
            value
          }
        }
      }`;

    const variables = { itemId, columnId };

    const response = await mondayClient.api(query, { variables });
    return response.data.items[0].column_values[0].value;
  }

  except (err) {
    console.error(err);
  }
}
```

In the function above, we define a query and associated parameters to then pass to the monday client and await a response. Up to this point, the monday client is a black box that does its dark work and gives back the result based on how it internally handles the execution of the request. In what follows, I want to follow this request through the client to figure out exactly what is happening, so that we can approximate it in Python.

## Monday Client SDK

In the prior code block, we can observe that the query and its variables are passed to an `api` method on the client class. Let's look at its implementation.

```js
class MondayClientSDK
{
  // ...
  
  api(query, options = {})
  {
    // ...
  }

  // ...
}
```

So right off the bat, we can see that we're passing a query and an object that represents options for that query. This corresponds to our `query` string and `variables` object in the service function.

```js
api(query, options = {})
{
  const params = { query, variables: options.variables };
  const token = options.token || this._apiToken;

  if (token) {
    return mondayApiClient.execute(params, token);
  } 
  
  else {
    return new Promise((resolve, reject) => {
      this._localApi("api", { params })
        .then(result => {
          resolve(result.data);
        })
        .catch(err => reject(err));
    });
  }
}
```

This is fairly straightforward. We're composing a `params` object by passing in the query string and its variables as well as grabbing an API token either passed with the options object or from the containing class itself. That is, we could have done the following in our service function:

```js
const response = await mondayClient.api(query, { variables, token: 'some-token' });
```

In this specific case, the API token was set on the client via a setter method, so we can assume it exists; therefore, we'll be taking the first of the two possible API calls. The `api` method from before functionally takes the following implementation in this specific case:

```js
api(query, options = {})
{
  const params = { query, variables: options.variables };
  const token = this._apiToken;
  return mondayApiClient.execute(params, token);
}
```

We'll pass in the query and variables, which will get composed into the object that is assigned to the `params` constant. We grab the API token from the class environment and pass these to the API client's `execute` function.

### Monday API Client

The API client itself is really just a module with a couple of functions for request handling. The `execute` function itself calls an `apiRequest` function that serves as a simple HTTP request factory, setting the appropriate authorization and content-type headers.

```js
function apiRequest(url, data, token, options = {})
{
  return fetch.nodeFetch(url, {
    method: options.method || "POST",
    body: JSON.stringify(data || {}),
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
}
```

The `apiRequest` function is used in the aforementioned `execute` function, which does the bulk of the HTTP request construction and response processing. The below snippet is an abridged version of the function, reduced to the minimal code for handling the case at hand.

```js
async function execute(data, token, options = {})
{
  const url = 'https://monday.com/api/v2'

  let response = await apiRequest(url, data, token, options);

  const statusCode = response.status;
  const contentType = response.headers.get('content-type');
  return await response.json();
}
```

In our specific case, recall that what we're passing to `execute` is a data object with the query string and query variables, as well as our API token. This means that the actual API request is a straightforward `POST` with the serialized GraphQL query and its parameters as the request body. Authorization is handled by a straightforward authorization header, the token for which is obtained through a standard OAuth flow.
