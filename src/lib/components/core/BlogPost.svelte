<div class="blog-post">
  <h3><a href={path}>{title}</a></h3>
  <h4 class="date">Published {date}</h4>
</div>


<script lang="ts">
  export let title: string;
  export let date: string;
  export let path: string;
</script>


<style lang="scss">
  .blog-post {
    padding: 16px 0;

    .date {
      margin-top: 8px;
      font-weight: 300;
      color: var(--deepnight-lighter);
    }
  }
</style>
