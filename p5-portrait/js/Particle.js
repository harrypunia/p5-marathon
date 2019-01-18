class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r;
    }
    show() {
        fill(255, 100, 100, 100);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    update(vol) {
        this.r = vol;
    }
}
