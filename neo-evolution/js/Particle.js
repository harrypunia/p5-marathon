class Particle {
    constructor(r, g, b, densityX, densityY, i) {
        this.x = 0;
        this.y = 0;
        this.i = i;
        this.spotLight = 150;
        this.brightness = 50;
        this.columnSize = width / densityX;
        this.rowSize = height / densityY;
        this.yCounter = 0;
        while (this.i >= densityX) {
            this.i -= densityX;
            this.yCounter++
        }
        this.minX = this.i * this.columnSize;
        this.minY = this.yCounter * this.rowSize;
        this.i = i;
        this.col = {
            r: r,
            g: g == undefined ? r : g,
            b: b == undefined ? r : b
        }
        this.maxOpacity = 20;
        this.opacity = 10;
        this.invertOpacity = false;
        this.xOff = random(1000);
        this.yOff = random(1000);
        this.speed = 0.001;
    }
    show() {
        noFill();
        stroke(this.col.r, this.col.g, this.col.b, this.opacity);
        strokeWeight(4);
        point(this.x, this.y);
    }
    update() {
        this.updateOpacity();
        this.xOff += this.speed;
        this.yOff += this.speed;
        this.x = map(noise(this.xOff), 0, 1, this.minX, this.minX + this.columnSize);
        this.y = map(noise(this.yOff), 0, 1, this.minY, this.minY + this.rowSize);
    }
    updateOpacity() {
        let _opX = map(this.x, 0, width, 0, this.maxOpacity),
            _opY = map(this.y, 0, height, 0, this.maxOpacity),
            opX,
            opY;
        if (Math.abs(this.x - mouseX) < this.spotLight && Math.abs(this.y - mouseY) < this.spotLight) {
            this.opacity <= this.brightness ? this.opacity += 2 : 0;
        } else {
            if (this.invertOpacity) {
                opX = _opX < (this.maxOpacity / 2) ? (this.maxOpacity / 2) - _opX : _opX - (this.maxOpacity / 2);
                opY = _opY < (this.maxOpacity / 2) ? (this.maxOpacity / 2) - _opY : _opY - (this.maxOpacity / 2);
            } else {
                opX = _opX < (this.maxOpacity / 2) ? _opX : this.maxOpacity - _opX;
                opY = _opY < (this.maxOpacity / 2) ? _opY : this.maxOpacity - _opY;
            }
            this.opacity >= (opX + opY) ? this.opacity -= 2 : 0;
        }
    }
    link(other, r, g, b) {
        if ((this.minX - other.minX == this.columnSize) && (Math.abs(this.yCounter - other.yCounter) <= 1)) {
            stroke(this.r, this.g, this.b, this.opacity / 10);
            strokeWeight(1);
            line(this.x, this.y, other.x, other.y);
        }
    }
}
