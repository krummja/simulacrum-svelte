<script lang="ts">
  export let title: string;
  export let date: string;
  export let path: string;
</script>

<div class="blog-post">
  <h3><a href={path}>{title}</a></h3>
  <h4 class="date">Published {date}</h4>
</div>
