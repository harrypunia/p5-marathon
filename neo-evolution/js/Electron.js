class Electron {
    constructor(r, trail) {
        this.r = r;
        this.angle = random(10);
        this.showTrail = trail;
        this.trail = {
            length: 160,
            decay: 50
        }
    }
    show(size, speed) {
        this.angle += speed;
        noFill();
        this.showTrail ? this.drawTrail(size) : this.drawLine(size);
    }
    drawTrail(size) {
        for (let i = 0; i < this.trail.length; i++) {
            let decay = i / this.trail.decay,
                maxVal = this.trail.length / this.trail.decay,
                op = map(decay, 0, maxVal, 0, 125.5),
                ellipseSize = map(decay, 0, maxVal, 0, size);

            fill(170, 16, 214, 255 - op);
            const {x, y} = this.updatePoint(decay); //deconstruction
            ellipse(x, y, size - ellipseSize, size - ellipseSize);
        }
    }
    drawLine(size) {
        const p = this.updatePoint();
        stroke(170, 16, 214);
        strokeWeight(size);
        point(p.x, p.y);
    }
    updatePoint(decay=0) {
        return {
            x: (this.r / 4) * Math.sin(this.angle - decay),
            y: this.r * Math.cos(this.angle - decay)
        }
    }
}