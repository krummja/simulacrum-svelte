---
title: Creating Animated SVGs with Svelte and d3.js
date: "2/27/2023"
---

<script lang="ts">
  import { select } from "d3";
  import { onMount, afterUpdate } from "svelte";

  let debug = false;
  let el: HTMLElement;

  let fps = 60;
  let start = Date.now();
  let frameDuration = 1_000_000 / fps;
  let frameLag = 0;

  onMount(() => {
    el = select("#d3-example");
    update();
  })

  afterUpdate(() => {
    (function loop() {
      requestAnimationFrame(loop);

      let current = Date.now();
      let elapsed = current - start;
      start = current;
      frameLag += elapsed;

      while (frameLag >= frameDuration) {
        frameLag -= frameDuration;
      }

      let dt = frameLag / frameDuration;
      update(dt);
    })();
  });

  const update = (dt: number) => {
    el.style("background-color", () => {
      return "hsl(" + dt * 360 + ",100%,50%)";
    });
  }
</script>

A major consideration in building my personal site was support for nice looking animations, ideally using a transformation library like [D3.js](https://d3js.org) to manipulate SVGs. Because I had decided to build the latest iteration of my website using [SvelteKit](https://kit.svelte.dev), I wanted to be able to leverage the component architecture of my frontend framework in a way that would work together with and reinforce the features of whatever animation library I chose.

After a decent bit of trial and error (and perhaps some github trawling for similar use cases) I think I've found a method that permits authoring highly granular animations as Svelte components.

I wanted to start putting this to use by designing an important graphical element for my site: the asterism icons that will represent the developmental stages of my digital garden. In a rare stroke of insight, I remembered to start writing this post *before* getting into the weeds on the project, therefore allowing me to document as I think rather than having to piece together my thought process looking back. This said, let's get into it.

## Svelte components rule

Svelte is an component-based front-end framework that compiles down to small, stand-alone JavaScript modules so that it works fast as hell in the browser. Its syntax is also relatively terse, in that it doesn't require a ton of extra boilerplate to build a component.

If you're not familiar with the framework, here's a [high-speed rundown](https://svelte.dev/docs#component-format). Here's the condensed version. A Svelte component looks like this:

```svelte
<script>
  // logic
</script>

<!-- markup (zero or more elements) -->

<style>
  /* style */
</style>
```

Inside the `<script>` block, the following basic principles apply:

1. Component props are simple exports.
2. Assignments are reactive.
3. `$` marks a statement as reactive.
4. Prefix stores with `$` to access their values.

There are a few additional caveats that govern the use of these principles, but that's the basic idea.

## D3 is beyond the ken of mortal men

D3.js is an extremely powerful library that lets you bind arbitrary data to the DOM. You can then apply transformations to the document to bend it to your will. Instead of the imperative approach required to modify the DOM using the built-in API, D3 lets you write declarative code that operates on selections of nodes.

While D3 allows manipulation of virtually any piece of the DOM, we'll primarily be using it to control SVG markup.

<div class="figure" id="d3-example" style="height: 100px;">
  {#if debug}
  <span style="background: #000">{frameDuration}</span>
  {/if}
</div>

In this example, I am using the `select` function provided by D3 to animate the fill color of a `div`.

```svelte
<script lang="ts">
  import { select } from "d3";
  import { onMount } from "svelte";

  let el: HTMLElement;

  onMount(() => {
    el = select("#d3-example");
    // animation logic
  });
</script>

<div id="d3-example"></div>
```

