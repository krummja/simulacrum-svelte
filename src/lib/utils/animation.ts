
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
