<script lang="ts">
  export let title: string;
  export let path: string;
</script>

<div class="design-page">
  <h3><a href={path}>{title}</a></h3>
</div>

<style lang="scss">
  .design-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--deepnight-normal);

    padding: 16px;
    margin: 8px 0;
  }
</style>