<div class="design-page">
  <h3><a href={path}>{title}</a></h3>
</div>


<script lang="ts">
  export let title: string;
  export let path: string;
</script>


<style lang="scss">
  .design-page {
    padding: 16px 0;
    background-color: var(--deepnight-normal);
  }
</style>