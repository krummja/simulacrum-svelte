<script lang="ts">
import ForceWrapper from "./components/ForceWrapper.svelte";
import Graph from "./components/ForceDirectedGraph/Graph.svelte";

import type { Types } from './components/ForceDirectedGraph/types';
import * as jsonData from './components/ForceDirectedGraph/data.json';

import { v4 as uuid } from "uuid";

const data: Types.DataObject = JSON.parse(JSON.stringify(jsonData));

for (let i = 0; i < data.links.length; i++)
{
  data.links[i].key = i.toString();
}

for (let i = 0; i < data.nodes.length; i++)
{
  let node = data.nodes[i];
  node.key = i.toString();
}
</script>

<!-- <ForceWrapper /> -->
<Graph
  {data}
  linkDistance={40}
  linkStrength={0.05}
  chargeStrength={-10}
  centerWidth={350}
  centerHeight={350}
  width={800}
  height={800}
/>
