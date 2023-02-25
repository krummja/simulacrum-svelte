<script lang="ts">
  import {
    forceX,
    forceY,
    forceCollide,
    forceRadial,
    forceSimulation,
    type Force,
    type SimulationNodeDatum,
  } from "d3";

  // Constants
  const move = (x: number, y: number) => `transform: translate(${x}px, ${y}px)`
  const numberOfDots = 100;

  // Types
  type Dot = {
    x?: number
    y?: number
  }

  // References
  let element: HTMLElement;

  // Variables
  let width = 1200;
  let centerPosition = [200, 200];

  let usedForceNames: string[] = [];
  let renderedDots: Dot[] = [];
  let dots: Dot[] = new Array(numberOfDots).fill(0).map(_ => ({}));

  // Reactives
  $: height = width;

  //// Simulation variables
  $: activeForceX = forceX().x(centerPosition[0]);
  $: activeForceY = forceY().y(centerPosition[1]);
  $: activeForceCollide = forceCollide().radius(10).iterations(3);
  $: activeForceRadial = forceRadial(150, (centerPosition[0], centerPosition[1]))
      .radius(150)
      .x(centerPosition[0])
      .y(centerPosition[1]);

  //// Simulation
  $: simulation = forceSimulation().nodes(dots).on("tick", drawTicks);

  //// Forces for node data
  $: forces = [
    ["x", activeForceX],
    ["y", activeForceY],
    ["collide", activeForceCollide],
    ["radial", activeForceRadial],
  ] as Array<[string, Force<SimulationNodeDatum, undefined>]>;

  //// Recompute forces on change
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

  // Component Methods
  function drawTicks()
  {
    renderedDots = [...dots];
  }

  function onClick(e: MouseEvent): void
  {
    if (!element) return;
    const bounds: DOMRect = element.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    centerPosition = [x, y];
  }
</script>


<div class="frame" on:click={onClick} bind:this={element}>
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
</div>


<style>
  .frame {
    border: 1px solid red;
    z-index: 0;
  }

  figure {
    margin: 0;
  }

  svg {
    overflow: visible;
  }

  circle {
    fill: #ffffff;
  }
</style>
