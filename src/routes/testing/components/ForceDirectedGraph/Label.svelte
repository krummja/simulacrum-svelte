<script lang="ts">
  import * as d3 from "d3";
  import type { Types } from "./types";
  import { onMount } from "svelte";
  import { select } from "d3";

  export let node: Types.NodeInfo;

  let ref: SVGTextElement;

  onMount(() => {
    if (ref) select(ref).data([node]);
  });
</script>


<text
  class="label"
  bind:this={ref}
>
  { node.name }
</text>


<style>
  text {
    fill: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    user-select: none;
  }
</style>
