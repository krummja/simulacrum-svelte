<script lang="ts">
  import type { RendererProps } from '../js/scene';
  import { onMount } from 'svelte';

  let container: HTMLElement;
  let elem: HTMLElement;

  let width: number;
  let height: number;

  onMount(async () => {
    const Create = await import('../js/scene');

    const renderer_props: RendererProps = {
      width: width,
      height: height,
    };

    console.log(renderer_props);

    await Create.createScene(elem, renderer_props);
  });
</script>

<div
  bind:this={container}
  bind:clientWidth={width}
  bind:clientHeight={height}
  class="container"
>
  <canvas bind:this={elem}></canvas>
</div>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 600px;
}
</style>
