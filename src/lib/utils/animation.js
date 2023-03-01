export class AnimationLoop {
    fps;
    updaters;
    start;
    frameDuration;
    frameLag;
    get deltaTime() {
        return this.frameLag / this.frameDuration;
    }
    constructor(params) {
        this.updaters = [];
        this.fps = params.fps;
        this.start = Date.now();
        this.frameDuration = params.frameDuration / this.fps;
        this.frameLag = 0;
    }
    loop() {
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
