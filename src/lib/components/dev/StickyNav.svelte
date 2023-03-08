<script lang="ts">
  import type { RouteData } from "./typings";
  import { onMount } from "svelte";
  import * as d3 from "d3";

  export let page: RouteData;
  export let visible: boolean = true;

  let pageLink: string;
  let width: number;
  let scrollY: number;
  let margin: number;
  let anchors: NodeListOf<HTMLElement>;
  let outlineLinks: NodeListOf<HTMLElement>;

  $: {
    if (width <= 1440) {
      visible = false;
      margin = 110;
    } else {
      visible = true;
      margin = 20;
    }
  }

  onMount(() => {
    pageLink = page.url.origin + page.url.pathname;
    if (document) {
      anchors = document.querySelectorAll('h1');
      outlineLinks = document.querySelectorAll('nav > ol > li > a');
    }
  })

  const onScroll = () => {
    outlineLinks.forEach((link, index) => {
      link.classList.remove('active');
    });

    for (let i = anchors.length - 1; i >= 0; i--) {
      if (scrollY > anchors[i].offsetTop - 75) {
        outlineLinks[i].classList.add('active');
        break;
      }
    }
  }
</script>

<svelte:window
  bind:outerWidth={width}
  bind:scrollY={scrollY}
  on:scroll={onScroll}
/>
<div class="toc-wrapper" style="margin-top: {margin}px">
  <div class="outline-wrapper" hidden={!visible}>
    <a class="outline-link outline-link-h1 to-top" href="{pageLink}">[Top]</a>
    <slot />
  </div>
  <div on:click={() => visible = !visible} on:keydown class="collapse">
    <div class="collapse-indicator"></div>
  </div>
</div>

<style lang="scss">
  .toc-wrapper {
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    margin-top: 20px;
  }

  .collapse {
    top: 0;
    bottom: 0;
    width: 8px;
    height: 50px;
    margin-left: 10px;
    cursor: pointer;

    .collapse-indicator {
      background-color: var(--blossom-darker);
      width: 5px;
      opacity: 0.5;
      height: 100%;
    }

    &:hover > .collapse-indicator {
      width: 12px;
      opacity: 1;
      transition: width 0.2s cubic-bezier(.33, .66, .66, 1), opacity 0.4s;
    }
  }

  .to-top {
    margin-left: 20px;
    margin-bottom: 0;
  }

  :global(.outline-level) {
    list-style-type: none;
    padding-inline-start: 20px;
    margin-top: 0;
  }

  :global(.outline-link) {
    text-decoration: none;
    box-shadow: none;
    border-bottom: none;
    color: var(--deepnight-lighter);
    font-size: 0.9rem;
  }

  :global(.outline-link:hover) {
    background: none;
    color: var(--blossom-normal);

    transition: color 0.2s cubic-bezier(.33, .66, .66, 1);
  }

  :global(.outline-link .active) {
    color: var(--blossom-dark);
  }
</style>
