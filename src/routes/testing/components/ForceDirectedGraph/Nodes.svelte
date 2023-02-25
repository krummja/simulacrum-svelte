<!--
  Graph Nodes Group

  Contains individual GraphNode instances
-->
<script lang="ts">
  import {
    selectAll,
    drag,
    type D3DragEvent,
    type DragBehavior,
    type SubjectPosition,
  } from "d3";
  import Node from "./Node.svelte";
  import type { Types } from "./types";
  import { onMount } from "svelte";

  type NodeBehavior = DragBehavior<
    SVGCircleElement,
    Types.Datum,
    Types.Datum | SubjectPosition
  >;

  type DragEvent = D3DragEvent<SVGCircleElement, never, never>;

  export let nodeData: Types.NodeInfo[];
  export let restartDrag: () => void;
  export let stopDrag: () => void;

  onMount(() => {
    setMouseEventListeners();
  });

  function setMouseEventListeners()
  {
    const nodes: Types.NodeSelection = selectAll(".node")
    const dragEvents: NodeBehavior = drag<SVGCircleElement, Types.Datum>();

    nodes.call(dragEvents
      .on('start', (event: DragEvent, d: Types.Datum) => {
        if (!event.active) restartDrag();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event: DragEvent, d: Types.Datum) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event: DragEvent, d: Types.Datum) => {
        if (!event.active) stopDrag();
        d.fx = null;
        d.fy = null;
      })
    );
  }
</script>


<g class="nodes">
  {#each nodeData as node (node.key)}
    <Node {node} />
  {/each}
</g>
