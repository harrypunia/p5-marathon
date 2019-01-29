class Particle {
    constructor(r, g, b, densityX, densityY, i) {
        this.x = 0;
        this.y = 0;
        this.i = i;
        this.light = {
            range: 150,
            brightness: 1
        }
        this.grid = {
            columnSize: width / densityX,
            rowSize: height / densityY,
            yCount: 0
        }
        while (this.i >= densityX) {
            this.i -= densityX;
            this.grid.yCount++
        }
        this.minX = this.i * this.grid.columnSize;
        this.minY = this.grid.yCount * this.grid.rowSize;
        this.color = {
            r: r,
            g: g == undefined ? r : g,
            b: b == undefined ? r : b
        }
        this.opacity = {
            max: 20,
            value: 10,
            invert: false
        }
        this.movement = {
            xOff: random(10),
            yOff: random(10),
            speed: 0.001,
        }
        this.stroke = random(1) > .5 ? 8 : 4;
    }
    show() {
        stroke(this.color.r, this.color.g, this.color.b, 255);
        strokeWeight(this.stroke);
        point(this.x, this.y);
    }
    update() {
        this.updateOpacity();
        this.movement.xOff += this.movement.speed;
        this.movement.yOff += this.movement.speed;
        this.x = map(noise(this.movement.xOff), 0, 1, this.minX, this.minX + this.grid.columnSize);
        this.y = map(noise(this.movement.yOff), 0, 1, this.minY, this.minY + this.grid.rowSize);
    }
    updateOpacity() {
        let _opX = map(this.x, 0, width, 0, this.opacity.max),
            _opY = map(this.y, 0, height, 0, this.opacity.max),
            opX,
            opY;
        //define OPs
        if (this.opacity.invert) {
            opX = _opX < (this.opacity.max / 2) ? (this.opacity.max / 2) - _opX : _opX - (this.opacity.max / 2);
            opY = _opY < (this.opacity.max / 2) ? (this.opacity.max / 2) - _opY : _opY - (this.opacity.max / 2);
        } else {
            opX = _opX < (this.opacity.max / 2) ? _opX : this.opacity.max - _opX;
            opY = _opY < (this.opacity.max / 2) ? _opY : this.opacity.max - _opY;
        }
        //Mouse-hovers
        if (Math.abs(this.x - mouseX) < this.light.range && Math.abs(this.y - mouseY) < this.light.range) {
            this.opacity.value <= this.light.brightness * (opX + opY) ? this.opacity.value += 2 : 0;
        } else {
            this.opacity.value >= (opX + opY) ? this.opacity.value -= 2 : 0;
        }
    }
    link(other, r, g, b) {
        if ((this.minX - other.minX == this.grid.columnSize) && (Math.abs(this.grid.yCount - other.grid.yCount) <= 1)) {
            strokeWeight(1);
            //stroke(this.r, this.g, this.b, this.opacity.value);
            line(this.x, this.y, other.x, other.y);
        }
    }
}
