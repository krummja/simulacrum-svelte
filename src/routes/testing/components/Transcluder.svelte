<div bind:this={ref}></div>


<script lang="ts">
import axios from 'axios';

let ref: HTMLElement;

axios
  .get('http://127.0.0.1:5173/designs/box-layout')
  .then((res) => {

    if ( document ) {
      var el = document.createElement('dummy');
      el.innerHTML = res.data;

      var article = el.getElementsByTagName('article');
      ref.append(article[0]);
      console.log(article[0]);
    }
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {});

/**
 * (event: LoadEvent<RouteParams, null, {}>) =>
    MaybePromise<void | (Omit<App.PageData, never> & Partial<Pick<App.PageData, never>> & Record<...>)>
 */
// const posts = load();
</script>