<script lang="ts">
  import {
    forceLink,
    forceSimulation,
    forceManyBody,
    forceCenter,
    select,
    selectAll,
    type Force,
    type SimulationNodeDatum,
  } from "d3";

  import * as d3 from "d3";

  import type { Types } from "./types";
  import Nodes from "./Nodes.svelte";
  import Links from "./Links.svelte";
  import Labels from "./Labels.svelte";

  import { onMount } from "svelte";

  export let data: Types.DataObject;
  export let linkDistance: number;
  export let linkStrength: number;
  export let chargeStrength: number;
  export let centerWidth: number;
  export let centerHeight: number;
  export let width: number;
  export let height: number;

  let bindInitZoom: any;
  let bindHandleZoom: any;

  let loaded: boolean = false;
  let usedForceNames: string[] = [];

  onMount(() => {
    loaded = true;
    drawTicks();
  });

  const transforms = {
    scale: 1,
    translate: [0, 0],
  }

  $: activeData = {
    nodes: [...data.nodes],
    links: [...data.links],
  };

  $: simulation = forceSimulation()
    .nodes(activeData.nodes as SimulationNodeDatum[])
    .on("tick", drawTicks);

  $: activeForceLink = forceLink().id((d) => {
        return (d as Types.NodeInfo).name
      })
    .links(data.links)
    .distance(linkDistance)
    .strength(linkStrength);

  $: activeForceCharge = forceManyBody().strength(chargeStrength);
  $: activeForceCenter = forceCenter(centerWidth, centerHeight);

  $: forces = [
    ['link', activeForceLink],
    ['center', activeForceCenter],
    ['charge', activeForceCharge],
  ] as Array<[string, Force<SimulationNodeDatum, undefined>]>;

  $: {
    forces.forEach(([name, force]) => {
      simulation.force(name, force);
    });

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

  $: zooming = d3
      .zoom()
      .scaleExtent([1, 8])
      .on('zoom', handleZoom);

  $: if (bindInitZoom) {
    d3.select(bindInitZoom).call(zooming);
  }

  function handleZoom(event: any)
  {
    select(bindHandleZoom).attr('transform', event.transform);
  }

  function restartDrag(): void
  {
    if (simulation) simulation.alphaTarget(0.2).restart();
  }

  function stopDrag(): void
  {
    if (simulation) simulation.alphaTarget(0);
  }

  function drawTicks(): Promise<void>
  {
    if (!simulation) return;
    if (!loaded) return;

    const nodes = selectAll('.node');
    const links = selectAll('.link');
    const labels = selectAll('.label');

    links
      .attr('x1', (d) => {
        return (d as { source: Types.Point }).source.x;
      })
      .attr('y1', (d) => {
        return (d as { source: Types.Point }).source.y;
      })
      .attr('x2', (d) => {
        return (d as { target: Types.Point }).target.x;
      })
      .attr('y2', (d) => {
        return (d as { target: Types.Point }).target.y;
      });

    nodes
      .attr('cx', (d) => {
        return (d as Types.Point).x;
      })
      .attr('cy', (d) => {
        return (d as Types.Point).y;
      });

    labels
      .attr('x', (d) => {
        return (<Types.Point> d).x + 10;
      })
      .attr('y', (d) => {
        return (<Types.Point> d).y + 5;
      })
  }
</script>


<svg
  bind:this={bindInitZoom}
  class="container"
  x={0}
  y={0}
  width={width}
  height={height}
  transform={`translate(${transforms.translate[0]}, ${transforms.translate[1]}) scale(${transforms.scale})`}
>
  <g bind:this={bindHandleZoom} class="graph">
    <Links linkData={activeData.links} />
    <Nodes nodeData={activeData.nodes} {restartDrag} {stopDrag} />
    <Labels nodeData={activeData.nodes} />
  </g>
</svg>


<style>
  .container {
    top: 60px;
    left: 0;
    position: absolute;
    width: 100%;
    height: calc(100% - 60px);
  }
</style>
