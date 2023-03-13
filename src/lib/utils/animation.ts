
type AnimatorParams = {
  fps: number
  frameDuration: number
}

export class AnimationLoop
{
  public fps: number;

  private updaters: Array<(dt: number) => void>;
  private start: number;
  private frameDuration: number;
  private frameLag: number;

  public get deltaTime(): number
  {
    return this.frameLag / this.frameDuration;
  }

  constructor(params: AnimatorParams)
  {
    this.updaters = [];
    this.fps = params.fps;
    this.start = Date.now();
    this.frameDuration = params.frameDuration / this.fps;
    this.frameLag = 0;
  }

  public loop(): void
  {
    requestAnimationFrame(this.loop.bind(this));
    let current = Date.now();
    let elapsed = current - this.start;
    this.start = current;
    this.frameLag += elapsed;

    while (this.frameLag >= this.frameDuration) {
      this.frameLag -= this.frameDuration;
    }

    this.updaters.forEach((update) => {
      update(this.deltaTime);
    });
  }
}

export function polarToCartesian(x: number, y: number, r: number, theta: number): number[]
{
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

export function decToHex(dec: number): string
{
  if (dec < 0)
    dec = 0xFFFFFFFF + dec + 1
  return dec.toString(16).toUpperCase();
}

export function colorFromRGBA(...colorDef: number[]): string
{
  let color = decToHex(colorDef[0]);
  color += decToHex(colorDef[1]);
  color += decToHex(colorDef[2]);
  color += decToHex(colorDef[3]);
  return `#${color}`;
}

export const R180 = Math.PI;
export const R90 = Math.PI / 2;
export const R15 = Math.PI / 12;


// const isClient: boolean = true;
// const defaultWindow = isClient ? window : undefined;

export type Fn = () => void;

export type AnyFn = (...args: any[]) => any;

export interface Pausable
{
  isActive: boolean;
  pause: () => void;
  resume: () => void;
}

export interface ConfigurableWindow
{
  window?: Window;
}

export interface UseRafFnCallbackArguments
{
  delta: number;
  timestamp: DOMHighResTimeStamp;
}

export interface UseRafFnOptions extends ConfigurableWindow
{
  immediate?: boolean;
}

export function useRafFn(fn: (args: UseRafFnCallbackArguments) => void, options: UseRafFnOptions = {}): Pausable
{
  // const {
  //   immediate = true,
  //   window = defaultWindow,
  // } = options;

  let isActive = false;

  let previousFrameTimestamp = 0;
  let rafId: number | null = null;

  function loop(timestamp: DOMHighResTimeStamp)
  {
    if (!isActive || !window) return;

    const delta = timestamp - previousFrameTimestamp;
    fn({ delta, timestamp });

    previousFrameTimestamp = timestamp;
    rafId = window.requestAnimationFrame(loop);
  }

  function resume()
  {
    if (!isActive && window) {
      isActive = true;
      rafId = window.requestAnimationFrame(loop);
    }
  }

  function pause()
  {
    isActive = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // if (immediate) resume();

  return {
    isActive,
    pause,
    resume,
  };
}
