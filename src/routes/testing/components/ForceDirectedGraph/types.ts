import type { Selection } from "d3";

export namespace Types {

  export type NodeInfo = {
    name: string
    group: number
    radiusSize: number
    fillColor: string
    key: string
  }

  export type LinkInfo = {
    source: string
    target: string
    value: string | number
    key: string
  }

  export type Datum = {
    x: number
    y: number
    fx?: number
    fy?: number
  }

  export type Point = {
    x?: number
    y?: number
  }

  export type NodeSelection = Selection<
    SVGCircleElement,
    Types.Datum,
    HTMLElement,
    any
  >;

  export type DataObject = {
    nodes: NodeInfo[]
    links: LinkInfo[]
  }
}
