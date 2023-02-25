<script lang="ts">
import { forceSimulation } from "d3";
import type { Force, SimulationNodeDatum } from "d3";
import type { Dot } from "./types";

const move = (x: number, y: number) => `transform: translate(${x}px, ${y}px)`

export let dots: Dot[];
export let forces: [string, Force<SimulationNodeDatum, undefined>][];

let usedForceNames: string[] = [];
let renderedDots: Dot[] = [];

let width = 1200;
$: height = width;

$: simulation = forceSimulation()
  .nodes(dots)
  .on("tick", () => {
    renderedDots = [...dots];
  });

$: {
  forces.forEach(([name, force]) => {
    simulation.force(name, force);
  })

  const newForceNames = forces.map(([name]) => name);
  const oldForceNames = usedForceNames.filter(
    force => !newForceNames.includes(force)
  );

  oldForceNames.forEach(name => {
    simulation.force(name, null);
  });
  usedForceNames = newForceNames;

  simulation.alpha(1);
  simulation.restart();
}
</script>


<!-- RENDER -->
<figure
  class="c"
  bind:clientWidth={width}
>
  <svg {width} {height}>
    {#each renderedDots as { x, y }, i}
      <circle style="{move(x, y)}" r="{6}"></circle>
    {/each}
  </svg>
</figure>


<!-- STYLE -->
<style>
  figure {
    margin: 0;
  }

  svg {
    overflow: visible;
  }

  circle {
    fill: #ececec;
  }
</style>
