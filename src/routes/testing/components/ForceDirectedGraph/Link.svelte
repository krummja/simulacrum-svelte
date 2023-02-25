<script lang="ts">
  import { select } from "d3";
  import type { Types } from './types';
  import { onMount } from 'svelte';

  let ref: SVGLineElement;

  export let link: Types.LinkInfo;

  onMount(() => {
    if (ref) select(ref).data([link]);
  });
</script>


<g class="linkGroup">
  <line
    class="link"
    stroke="#666"
    bind:this={ref}
  />
</g>
