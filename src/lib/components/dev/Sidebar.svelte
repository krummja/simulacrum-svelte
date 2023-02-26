<div class="container">
  {#if show}
    <div class="sidebar">
      Content
    </div>
  {/if}
</div>


<script lang="ts">
export let show: boolean = true;
</script>


<style lang="scss">
  .container {
    display: flex;
    height: calc(100vh - var(--header-height));
  }

  .sidebar {
    top: 0;
    left: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-right: 1px solid #aaa;
    background: var(--deepnight-darker);
    overflow-y: auto;
    width: 18rem;
  }
</style>
