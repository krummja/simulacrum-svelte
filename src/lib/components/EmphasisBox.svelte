<script lang="ts">
  export let title: string;
</script>

<div class="emphasis">
  <h1>{title}</h1>
  <div class="body">
    <slot/>
  </div>
</div>

<style lang="scss">
.emphasis {
  margin: 8px 0;
  padding: 8px;
  padding-left: 16px;
  background-color: var(--deepnight-dark);
 
  h1 {
    font-size: 12pt;
  }

  .body {
    margin: 0 16px;
    text-align: justify;
  }
}
</style>