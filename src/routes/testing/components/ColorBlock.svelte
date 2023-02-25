<script context="module" lang="ts">
  export type Color = {
    r: number,
    g: number,
    b: number,
    a: number,
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  export let color: Color;
  export let width: number = 150;
  export let height: number = 150;
  export let margin: number = 3;

  let elem: HTMLElement;

  onMount(() => {
    elem.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    elem.style.width = `${width}px`;
    elem.style.height = `${height}px`;
    elem.style.margin = `${margin}px`;
  });
</script>

<div class="block" bind:this={elem}></div>
