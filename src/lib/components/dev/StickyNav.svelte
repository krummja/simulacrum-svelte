<script lang="ts">
  import type { RouteData } from "./typings";
  import { onMount } from "svelte";

  export let page: RouteData;
  export let visible: boolean = true;

  let pageLink: string;

  let width: number;
  let margin: number;

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
  })
</script>

<svelte:window bind:outerWidth={width} />
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
    padding-left: 20px;
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
</style>
