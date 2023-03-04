<script lang="ts">
  let background: string;
  let ref: HTMLElement;

  export { background };
</script>

<div bind:this={ref} style={`background-color: ${background};`}>
</div>
