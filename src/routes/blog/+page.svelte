<!-- 
  Blog Index
 -->
<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let data: PageData;
</script>

<h1>Blog</h1>

<h2>Posts</h2>

{#each data.posts as post}
  <BlogPost 
    title={post.meta.title} 
    date={post.meta.date} 
    path={post.path} 
  />
{/each}

<h2>Fragments</h2>

<h2>Series</h2>
