<script lang="ts">
  import Label from "./Label.svelte";
  import type { Types } from "./types";

  export let nodeData: Types.NodeInfo[];
</script>


<g>
  {#each nodeData as node (node.key)}
    <Label {node} />
  {/each}
</g>
