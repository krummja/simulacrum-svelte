<script lang="ts">
  export let title: string;
  export let date: string;
  export let path: string;
</script>

<div class="blog-post">
  <h2><a href={path}>{title}</a></h2>
  <h4 class="date">Published {date}</h4>
</div>

<style lang="scss">
.blog-post {
  padding: 0 0 16px 0;
}
</style>
