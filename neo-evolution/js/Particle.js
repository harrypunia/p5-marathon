class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xOff = random(1);
        this.yOff = random(1);
        this.speed = 0.005;
        this.init = {
            x: x,
            y: y
        }
    }
    show() {
        noFill();
        stroke(255);
        strokeWeight(4);
        point(this.x, this.y);
    }
    update() {
        this.xOff += this.speed;
        this.yOff += this.speed;
        this.x = this.init.x + map(noise(this.xOff), 0, 1, -20, 20);
        this.y = this.init.y + map(noise(this.yOff), 0, 1, -20, 20);
    }
    link(other) {
        strokeWeight(1);
        line(this.x, this.y, other.x, other.y);
    }
}
