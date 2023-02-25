<script lang="ts">
  import { select } from "d3";
  import type { Types } from "./types";
  import { onMount } from "svelte";

  let ref: SVGCircleElement;

  export let node: Types.NodeInfo;

  onMount(() => {
    if (ref) select(ref).data([node]);
  });
</script>


<circle
  class="node"
  r={node.radiusSize}
  fill={node.fillColor}
  bind:this={ref}
></circle>
