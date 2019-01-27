class Particle {
    constructor(r, g, b) {
        this.x = 0;
        this.y = 0;
        this.xOff = random(1000);
        this.yOff = random(1000);
        this.speed = 0.0001;
        this.col = {
            r: r,
            g: g == undefined ? r : g,
            b: b == undefined ? r : b
        }
        this.maxOpacity = 20;
        this.opacity;
        this.invertOpacity = false;
    }
    show() {
        noFill();
        stroke(this.col.r, this.col.g, this.col.b, this.opacity);
        strokeWeight(4);
        point(this.x, this.y);
    }
    update() {
        this.checkBoundry();
        this.updateOpacity();
        this.xOff += this.speed;
        this.yOff += this.speed;
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.y = map(noise(this.yOff), 0, 1, 0, height);
    }
    checkBoundry() {
        if (this.x < 0 || this.x > width) {
            this.xOff = random(1000);
        }
        if (this.y < 0 || this.y > height) {
            this.yOff = random(1000);
        }
    }
    updateOpacity() {
        let _opX = map(this.x, 0, width, 0, this.maxOpacity),
            _opY = map(this.y, 0, height, 0, this.maxOpacity),
            opX,
            opY;
        if (this.invertOpacity) {
            opX = _opX < (this.maxOpacity / 2) ? (this.maxOpacity / 2) - _opX : _opX - (this.maxOpacity / 2);
            opY = _opY < (this.maxOpacity / 2) ? (this.maxOpacity / 2) - _opY : _opY - (this.maxOpacity / 2);
        } else {
            opX = _opX < (this.maxOpacity / 2) ? _opX : this.maxOpacity - _opX;
            opY = _opY < (this.maxOpacity / 2) ? _opY : this.maxOpacity - _opY;
        }
        this.opacity = opX + opX;
    }
    link(other, r, g, b) {
        stroke(this.r, this.g, this.b, this.opacity / 10);
        strokeWeight(1);
        line(this.x, this.y, other.x, other.y);
    }
}
