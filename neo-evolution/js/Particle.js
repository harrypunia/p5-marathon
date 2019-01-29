class Particle {
    constructor(r, g, b, densityX, densityY, i) {
        this.i = i;
        this.size = {
            w: width / 1.5,
            h: height / 1.5,
        }
        this.begin = {
            x: (width - this.size.w) / 2,
            y: (height - this.size.h) / 2
        }
        this.grid = {
            columnSize: this.size.w / densityX,
            rowSize: this.size.h / densityY,
            yCount: 0
        }
        while (this.i >= densityX) {
            this.i -= densityX;
            this.grid.yCount++
        }
        this.position = {
            min: {
                x: this.i * this.grid.columnSize,
                y: this.grid.yCount * this.grid.rowSize
            }
        };
        this.position.x = map(noise(random(100)), 0, 1, this.position.min.x, this.position.min.x + this.grid.columnSize) + this.begin.x;
        this.position.y = map(noise(random(100)), 0, 1, this.position.min.y, this.position.min.y + this.grid.rowSize) + this.begin.y;
        this.color = {
            r: r,
            g: g == undefined ? r : g,
            b: b == undefined ? r : b
        }
        this.opacity = {
            max: 20,
            value: 10
        }
        this.stroke = random(1) > .5 ? 8 : 4;
    }
    show() {
        stroke(this.color.r, this.color.g, this.color.b, this.opacity.value);
        strokeWeight(this.stroke);
        point(this.position.x, this.position.y);
    }
    update() {
        this.updateOpacity();
    }
    updateOpacity() {
        let _opX = map(this.position.x, this.begin.x, width - this.begin.x, 0, this.opacity.max),
            _opY = map(this.position.y, this.begin.y, height - this.begin.y, 0, this.opacity.max),
            opX,
            opY;
            opX = _opX < (this.opacity.max / 2) ? _opX : this.opacity.max - _opX;
            opY = _opY < (this.opacity.max / 2) ? _opY : this.opacity.max - _opY;
            this.opacity.value = opX + opY;
    }
    link(other) {
        if ((this.position.min.x - other.position.min.x == this.grid.columnSize) && (Math.abs(this.grid.yCount - other.grid.yCount) <= 1)) {
            strokeWeight(1);
            line(this.position.x, this.position.y, other.position.x, other.position.y);
        }
    }
}
