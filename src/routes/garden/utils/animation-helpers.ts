import type { Selection, BaseType } from "d3";

export type LoopData = {
  fps: number
  start: number
  frameDuration: number
  frameLag: number
}

export class Animator
{
  public fps: number;

  private start: number;
  private frameDuration: number;
  private frameLag: number;
  private target: HTMLElement;

  public get deltaTime(): number
  {
    return this.frameLag / this.frameDuration;
  }

  constructor(data: LoopData, target: HTMLElement)
  {
    this.fps = data.fps;
    this.start = data.start;
    this.frameDuration = data.frameDuration;
    this.frameLag = data.frameLag;
    this.target = target;
  }

  public loop(): void
  {
    requestAnimationFrame(this.loop);

    let current = Date.now();
    let elapsed = current - this.start;
    this.start = current;
    this.frameLag += elapsed;

    while (this.frameLag >= this.frameDuration) {
      this.frameLag -= this.frameDuration;
    }

    this.update(this.deltaTime);
  }

  public update(dt: number): void {}
}
