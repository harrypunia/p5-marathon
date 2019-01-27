class Electron {
    constructor(r) {
        this.r = r;
        this.x;
        this.y;
        this.angle = random(10);
    }
    show(size) {
        noFill();
        stroke(170, 16, 214);
        strokeWeight(size);
        point(this.x, this.y);
    }
    revolve(speed) {
        this.angle += speed;
        this.x = (this.r / 4) * Math.sin(this.angle);
        this.y = this.r * Math.cos(this.angle);
    }
}
