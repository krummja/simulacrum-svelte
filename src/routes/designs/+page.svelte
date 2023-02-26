<div class="index-wrapper">
  <div class="item-wrapper">
    {#each data.designs as design}
      <DesignPage
        title={design.meta.title}
        path={design.path}
      />
    {/each}
  </div>
</div>


<script lang="ts">
  import type { PageData } from "./$types";
  import DesignPage from "$lib/components/dev/DesignPage.svelte";
  export let data: PageData;
</script>


<style lang="scss">
  .item-wrapper {
    margin: 8px 0;
    padding: 0 16px;
    background-color: var(--deepnight-normal);
  }

  .index-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
