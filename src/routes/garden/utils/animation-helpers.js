export class Animator {
    fps;
    start;
    frameDuration;
    frameLag;
    target;
    get deltaTime() {
        return this.frameLag / this.frameDuration;
    }
    constructor(data, target) {
        this.fps = data.fps;
        this.start = data.start;
        this.frameDuration = data.frameDuration;
        this.frameLag = data.frameLag;
        this.target = target;
    }
    loop() {
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
    update(dt) { }
}
