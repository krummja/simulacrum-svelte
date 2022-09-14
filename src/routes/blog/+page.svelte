<!-- 
  Blog Index
 -->
<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let data: PageData;
</script>

<h1>Blog</h1>

{#each data.posts as post}
  <BlogPost 
    title={post.meta.title} 
    date={post.meta.date} 
    path={post.path} 
  />
{/each}
