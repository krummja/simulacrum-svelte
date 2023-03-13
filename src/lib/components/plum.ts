import type { Fn } from '$lib/utils/animation';
import { useRafFn } from '$lib/utils/animation';

type Canvas = HTMLCanvasElement;

export class Visualization
{
  public ctx: CanvasRenderingContext2D;
  public iterations: number;
  public steps: any[];

  private prevSteps: any[];
  private controls: ReturnType<typeof useRafFn>;
  private lastTime: number;
  private debug: boolean = false;

  public constructor(public canvas: Canvas, width: number, height: number)
  {
    this.ctx = canvas.getContext('2d');

    // https://web.dev/canvas-hidipi/
    const dpr: number = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    this.ctx.scale(dpr, dpr);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    this.iterations = 0;
    this.steps = [];
    this.prevSteps = [];
    this.controls = useRafFn(this.frame.bind(this), { immediate: false });
    this.lastTime = 0;
  }

  public frame()
  {

  }
}
