<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div>
  {#each data.tags as tags}
    {tags}
  {/each}
</div>

<style>

</style>
