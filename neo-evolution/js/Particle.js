class Particle {
    constructor(densityX, densityY, i) {
        this.i = i;
        this.size = {
            w: width / 1.5,
            h: height / 1.3,
        }
        this.grid = {
            columnSize: this.size.w / densityX,
            rowSize: this.size.h / densityY,
            yCount: 0,
            begin: {
                x: (width - this.size.w) / 2,
                y: (height - this.size.h) / 2
            }
        }
        while (this.i >= densityX) {
            this.i -= densityX;
            this.grid.yCount++
        }
        this.point = {
            type: 'point',
            chance: 0.0005,
            firing: false,
            ascend: true,
            max: 150,
            speed: 4,
            size: random(1) > .5 ? 8 : 4,
            position: {
                x: 0,
                y: 0,
                min: {
                    x: this.i * this.grid.columnSize,
                    y: this.grid.yCount * this.grid.rowSize
                },
                max: {
                    x: this.i * this.grid.columnSize + this.grid.columnSize,
                    y: this.grid.yCount * this.grid.rowSize + this.grid.rowSize
                }
            }
        }
        this.line = {
            firing: false,
            ascend: true,
            max: 100,
            speed: 4
        };
        this.point.position.x = this.point.position.min.x + this.grid.begin.x + noise(random(100)) * (this.point.position.max.x - this.point.position.min.x);
        this.point.position.y = this.point.position.min.y + this.grid.begin.y + noise(random(100)) * (this.point.position.max.y - this.point.position.min.y);
        const _opX = map(this.point.position.x, this.grid.begin.x, width - this.grid.begin.x, 0, 20),
            _opY = map(this.point.position.y, this.grid.begin.y, height - this.grid.begin.y, 0, 20),
            opX = _opX < 10 ? _opX : 20 - _opX,
            opY = _opY < 10 ? _opY : 20 - _opY;
        this.point.opacity = this.point.initOpacity = this.line.opacity = this.line.initOpacity = opX + opY; //Try it later
    }
    show() {
        stroke(255, this.point.opacity * 2);
        strokeWeight(this.point.size);
        point(this.point.position.x, this.point.position.y);
        (Math.random() < this.point.chance || this.point.firing) ? this.fire(this.point): 0;
        this.line.firing ? this.fire(this.line) : 0;
    }
    link(other) {
        const inRange = (this.point.position.min.x - other.point.position.min.x == this.grid.columnSize) && (Math.abs(this.grid.yCount - other.grid.yCount)) <= 1;
        if (inRange) {
            strokeWeight(1);
            other.line.firing ? stroke(255, other.line.opacity) : stroke(255, this.line.opacity);
            line(this.point.position.x, this.point.position.y, other.point.position.x, other.point.position.y);
        }
    }
    fire(blink) {
        const {max,speed,type,opacity,initOpacity} = blink;
        blink.firing = true;
        if (opacity.value < max && blink.ascend) {
            opacity.value += speed;
        } else if (opacity.value > max && blink.ascend) {
            blink.ascend = false;
            type == 'point' ? this.lineBlink.firing = true : 0; //This is firing the line
        } else if (opacity.value > initOpacity && !blink.ascend) {
            opacity.value -= speed / 2;
        } else if (opacity.value < initOpacity && !blink.ascend) {
            opacity.value = initOpacity;
            blink.ascend = true;
            blink.firing = false;
        }
    }
}
