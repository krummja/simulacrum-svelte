<script lang="ts">
  import Tag from "$lib/components/dev/Tag.svelte";

  export let tags: string[];
</script>

<div class="tags">
  {#each tags as tag}
    <Tag text={tag} />
  {/each}
</div>

<style lang="scss">
  .tags {
      margin-top: 16px;
    }
</style>
