<!-- 
  Blog Index
 -->
<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let data: PageData;
</script>

<h1>Blog</h1>

<div class="index-wrapper">

  <div class="blog-section posts-wrapper">
    <h2>Posts</h2>

    {#each data.posts as post}
      <BlogPost 
        title={post.meta.title} 
        date={post.meta.date} 
        path={post.path} 
      />
    {/each}
  </div>

  <div class="blog-section fragments-wrapper">
    <h2>Fragments</h2>
  </div>

  <div class="blog-section series-wrapper">
    <h2>Series</h2>
  </div>
</div>

<style lang="scss">
  .blog-section {
    margin: 8px 0;
    padding: 0 8px;
    background-color: var(--deepnight-dark);
  }

  .index-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
