<script lang="ts">
  import ColorBlock from "./ColorBlock.svelte";

  const width = 200;
  const height = 50;
  const columns = 6;
  const margin = 4;

  const palette = [
    [22, 21, 21],  // deepnightDarker
    [39, 37, 37],  // deepnightDark
    [53, 49, 50],  // deepnightNormal
    [66, 62, 63],  // deepnightLight
    [103, 101, 102],  // deepnightLighter
    [154, 152, 153],  // deepnightLightest

    [247, 243, 239],  // overcastSoft
    [249, 240, 244],  // overcastLight
    [235, 229, 231],  // overcastNormal
    [220, 214, 216],  // overcastDark

    [241, 193, 207],  // blossomLighter
    [232, 155, 177],  // blossomLight
    [224, 123, 150],  // blossomNormal
    [215, 101, 128],  // blossomDark
    [190, 58, 89],  // blossomDarker

    [224, 77, 80],  // sunsetRed
    [224, 150, 118],  // sunsetOrange
    [224, 199, 154],  // sunsetYellow
    [190, 223, 169],  // sunsetGreen
    [148, 181, 224],  // sunsetBlue

    [213, 111, 68],  // sunsetOrangeDarker
    [186, 145, 69],  // sunsetYellowDarker
    [75, 123, 45],  // sunsetGreenDarker
    [77, 132, 203],  // sunsetBlueDarker
  ];
</script>

<div class="container">
  <div class="palette" style="width: {(width * columns) + (margin * 2 * columns)}px">
    {#each palette as color}
    <ColorBlock
      color={{r: color[0], g: color[1], b: color[2], a: 1.0}}
      width={width}
      height={height}
      margin={margin}
    />
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .palette {
      display: flex;
      flex-wrap: wrap;
      // width: 700px;
    }
  }
</style>
