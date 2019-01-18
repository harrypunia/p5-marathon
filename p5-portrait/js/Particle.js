class Particle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    update(vol) {
        let newR = vol < 1 ? 1 : vol;
        this.r = newR;
    }
}
