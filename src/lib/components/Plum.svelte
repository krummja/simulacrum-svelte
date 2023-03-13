<script lang="ts">
  import { polarToCartesian, R180, R90, R15, colorFromRGBA } from "$lib/utils/animation";
  type Canvas = HTMLCanvasElement;

  const { random } = Math;
  const interval = 1000 / 40;
  const color = '#CC88AA25';

  let canvas: Canvas;

  $: stopped = false;
  $: init = 4;
  $: len = 6;
</script>

<div class="canvas-wrapper">
  <canvas bind:this={canvas}></canvas>
</div>

<style lang="scss">
  .canvas-wrapper {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
  }
</style>
