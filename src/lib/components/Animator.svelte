<script lang="ts">
  import { onMount } from "svelte";
  import { select } from "d3";

  export let update: (dt: number) => void;

  onMount(() => {
    update(0);
  })
</script>

<div class="animator">
  <slot />
</div>
