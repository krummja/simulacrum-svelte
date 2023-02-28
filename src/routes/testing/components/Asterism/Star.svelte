<script lang="ts">
  import type { Types } from "./types";
  import { onMount } from "svelte";
  import { select } from "d3";

  let ref: SVGCircleElement;

  export let star: Types.Star;

  onMount(() => {
    if (ref) select(ref).data([star]);
  })
</script>


<circle
  class="star"
  r={star.radius}
  fill={star.fill}
  bind:this={ref}
></circle>
