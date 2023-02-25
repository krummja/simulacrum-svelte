<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let data: PageData;
</script>

<div class="index-wrapper">
  <div class="blog-section posts-wrapper">
    {#each data.posts as post}
      <BlogPost
        title={post.meta.title}
        date={post.meta.date}
        path={post.path}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .blog-section {
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
