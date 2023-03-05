<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  console.log(data);
</script>

<div>
  Content
  <!-- <svelte:component this={data.tags} /> -->
</div>
