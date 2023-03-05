<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPost from '$lib/components/core/BlogPost.svelte';
  import FilterBar from "$lib/components/dev/FilterBar.svelte";
  export let data: PageData;
</script>

<FilterBar />
<div class="index-wrapper">
  <div class="item-wrapper">
    {#each data.posts as post}
      <BlogPost
        title={post.meta.title}
        date={post.meta.date}
        stage={post.meta.stage}
        path={post.path}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .item-wrapper {
    margin: 8px 0;
    padding: 0 16px;
  }

  .index-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
