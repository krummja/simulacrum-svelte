<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import type { SimulationNodeDatum, SimulationLinkDatum } from 'd3';

  let vis: HTMLElement;

  export let width = 640;
  export let height = 400;
  export let nodeFill = "currentColor";
  export let nodeStroke = "#fff";

  const nodes = [
    {id: 0},
    {id: 1},
    {id: 2},
  ]

  function redraw(): void {
    d3.select(vis).html(null);

    const svg = d3.select(vis)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    const test = svg.append("g")
      .attr("fill", nodeFill)
      .attr("stroke", nodeStroke)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 30);
  };

  onMount(() => {
    redraw();
    window.addEventListener('resize', redraw);
  });
</script>

<div bind:this={vis}></div>
