class Electron {
    constructor(r, trail) {
        this.r = r;
        this.x;
        this.y;
        this.angle = random(10);
        this.showTrail = trail;
        this.trail = {
            length: 60,
            decay: 20
        }
    }
    show(size, speed) {
        this.angle += speed;
        //
        noFill();
        if (this.showTrail) {
            for (let i = 0; i < this.trail.length; i++) {
                let decay = i / this.trail.decay,
                    maxVal = this.trail.length / this.trail.decay,
                    op = map(decay, 0, maxVal, 0, 255),
                    ellipseSize = map(decay, 0, maxVal, 0, size);

                fill(170, 16, 214, 255 - op);
                this.x = (this.r / 4) * Math.sin(this.angle - decay);
                this.y = this.r * Math.cos(this.angle - decay);
                ellipse(this.x, this.y, size - ellipseSize, size - ellipseSize);
            }
        } else {
            stroke(170, 16, 214);
            strokeWeight(size);
            this.x = (this.r / 4) * Math.sin(this.angle);
            this.y = this.r * Math.cos(this.angle);
            point(this.x, this.y);
        }
    }
}
