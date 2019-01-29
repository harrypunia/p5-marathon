class Particle {
    constructor(r, g, b, densityX, densityY, i) {
        this.i = i;
        this.size = {
            w: width / 1.5,
            h: height / 1.3,
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
        this.stroke = random(1) > .5 ? 8 : 4;
        this.blink = {
            type:'blink',
            chance: 0,
            firing: false,
            ascend: true,
            max: 150,
            speed: 8
        }
        this.lineBlink = {
            type: 'lineBlink',
            firing: false,
            ascend: true,
            max: 100,
            speed: 8
        }
        this.opacity = {
            max: 20,
            value: 0,
            storeValue: 0
        }
        this.lineOpacity = {
            max: 20,
            value: 0,
            storeValue: 0
        }
        const _opX = map(this.position.x, this.begin.x, width - this.begin.x, 0, this.opacity.max),
            _opY = map(this.position.y, this.begin.y, height - this.begin.y, 0, this.opacity.max),
            opX = _opX < (this.opacity.max / 2) ? _opX : this.opacity.max - _opX,
            opY = _opY < (this.opacity.max / 2) ? _opY : this.opacity.max - _opY;
        this.opacity.value = this.opacity.storeValue = this.lineOpacity.value = this.lineOpacity.storeValue = opX + opY;
    }
    show() {
        this.blink.chance = Math.floor(random(10000)) == 1;
        stroke(255, this.opacity.value * 2);
        strokeWeight(this.stroke);
        point(this.position.x, this.position.y);
        ((this.blink.chance || this.blink.firing)) ? this.fire(this.opacity, this.blink) : 0;
        this.lineBlink.firing ? this.fire(this.lineOpacity, this.lineBlink) : 0;
    }
    link(other) {
        if ((this.position.min.x - other.position.min.x == this.grid.columnSize) && (Math.abs(this.grid.yCount - other.grid.yCount) <= 1)) {
            strokeWeight(1);
            if (other.lineBlink.firing) {
                stroke(255, other.lineOpacity.value);
            } else {
                stroke(255, this.lineOpacity.value);
            }
            line(this.position.x, this.position.y, other.position.x, other.position.y);
        }
    }
    fire(opacity, blink) {
        const {storeValue} = opacity,
              {max, speed, type} = blink;
        blink.firing = true;
        if (opacity.value < max && blink.ascend) {
            opacity.value += speed;
        } else if (opacity.value > max && blink.ascend) {
            blink.ascend = false;
            type == 'blink' ? this.lineBlink.firing = true : 0;
        } else if (opacity.value > storeValue && !blink.ascend) {
            opacity.value -= speed / 2;
        } else if (opacity.value < storeValue && !blink.ascend) {
            opacity.value = storeValue;
            blink.ascend = true;
            blink.firing = false;
        }
    }
}
