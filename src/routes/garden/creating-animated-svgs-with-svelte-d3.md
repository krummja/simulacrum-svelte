---
title: Creating Animated SVGs with Svelte and D3
date: "2/27/2023"
stage: 1
tags:
  - svelte
  - d3
---

<script lang="ts">
  import { select } from "d3";
  import { onMount, afterUpdate } from "svelte";
  import { AnimationLoop } from "$lib/utils/animation";
  import ProgressBlock from '$lib/components/ProgressBlock.svelte';
  import StickyNav from '$lib/components/StickyNav.svelte';
  import { page } from '$app/stores';

  let debug = false;
  let colorDiv: HTMLElement;
  let asterism: SVGElement;
  let animation = new AnimationLoop({fps: 60, frameDuration: 1_000_000});

  onMount(() => {
    colorDiv = select("#d3-example");
    animation.updaters.push(randomColorUpdate);
    animation.loop();
  })

  const randomColorUpdate = (dt: number) => {
    colorDiv.style("background-color", () => {
      return "hsl(" + dt * 360 + ",100%,50%)";
    });
  }

  // const particleCount = 10;

  // const svg = select("#asterism");
  // const container = svg.append("g")
  //   .attr("class", "axis")
  //   .attr("transform", "translate(250, 250)");

  // const node = container.append("g");
  // const particles = new Array(particleCount);

  // const asterismUpdate = (dt: number) => {
  //   for (let i = 0, i < particleCount; i++)
  //   {

  //   }
  // }
</script>

<StickyNav page={$page}>

TOC

</StickyNav>

A major consideration in building my personal site was support for nice looking animations, ideally using a transformation library like [D3.js](https://d3js.org) to manipulate SVGs. Because I had decided to build the latest iteration of my website using [SvelteKit](https://kit.svelte.dev), I wanted to be able to leverage the component architecture of my frontend framework in a way that would work together with and reinforce the features of whatever animation library I chose.

After a decent bit of trial and error (and perhaps some github trawling for similar use cases) I think I've found a method that permits authoring highly granular animations as Svelte components.

I wanted to start putting this to use by designing an important graphical element for my site: the asterism icons that will represent the developmental stages of my digital garden. In a rare stroke of insight, I remembered to start writing this post *before* getting into the weeds on the project, allowing me to document as I think rather than having to piece together my thought process looking back. This said, let's get into it.

# Svelte components rule

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


# D3 is black magic

D3.js is an extremely powerful library that lets you bind arbitrary data to the DOM. You can then apply transformations to the document to bend it to your will. Instead of the imperative approach required to modify the DOM using the built-in API, D3 lets you write declarative code that operates on selections of nodes.

While D3 allows manipulation of virtually any piece of the DOM, we'll primarily be using it to control SVG markup.

<div class="figure" id="d3-example" style="height: 100px;">
  {#if debug}
  <span style="background: #000">{animation.frameDuration}</span>
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

That's pretty simple and could just as well be done with other, more conventional methods of controlling element styles programmatically. What makes D3 especially powerful is the ability to modify an entire selection set at once. Compare the imperative style required for conventional element manipulation:

```js
const paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "blue", null);
}
```

Compare that to D3's declarative selection style:

```js
d3.selectAll("p").style("color", "blue");
```

Doesn't that absolutely *slap*?

Alright, so that's the basic idea behind D3. Let's roll up our sleeves and get to work for real now.


# Designing a reactive D3 element

<ProgressBlock />
