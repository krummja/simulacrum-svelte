<script lang="ts">
  export let text: string;
</script>

<a class="tag" href="/tags/{text}">{text}</a>

<style lang="scss">
  .tag {
    margin: 4px 5px;
    padding: 2px 5px;
    height: 24px;

    border-radius: 4px;
    font-weight: bold;
    color: var(--deepnight-darker);
    background-color: var(--blossom-dark);

    transition: background-color 0.1s ease-in;

    &:hover {
      background-color: var(--blossom-darker);
    }
  }
</style>
