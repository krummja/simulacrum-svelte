---
title: An Interactive Interactive Tutorial Tutorial
date: "09/13/2022"
---

One of the major features I wanted for my blog was the ability to create interactive visualizations and tutorials, of the type presented on [Amit Patel's blog](https://www.redblobgames.com). A natural place to begin would be to follow along with his ["making of" post](https://www.redblobgames.com/making-of/line-drawing/), known alternatively as the *interactive tutorial about making interactive tutorials*. To that end, this post will be an interactive interactive tutorial tutorial.

As Amit disclaims on his own post, following along with this tutorial requires some basic Javascript, as well as a smattering of SVG and HTML. I'll be using the D3 library in this, but the same techniques should work with other libraries. I recommend continuing this chain and creating your own interactibles while following this tutorial.

## Web Page

```js
let x = 10;

for (let i = 0; i < 10; i++) {
  x += i;
}
```

