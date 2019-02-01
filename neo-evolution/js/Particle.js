class Particle {
    constructor(densityX, densityY, i) {
        this.i = i;
        this.size = {
            w: width / 1.5,
            h: height / 1.3,
        };
        this.grid = {
            columnSize: this.size.w / densityX,
            rowSize: this.size.h / densityY,
            y: 0,
            min: {
                x: (width - this.size.w) / 2,
                y: (height - this.size.h) / 2
            }
        };
        while (this.i >= densityX) {
            this.i -= densityX;
            this.grid.y++
        };
        this.grid.x = this.i;
        this.point = {
            firing: false,
            ascend: true,
            maxOpacity: 150,
            speed: 4,
            size: random(1) > .5 ? 8 : 4,
            pos: {
                x: 0,
                y: 0,
                min: {
                    x: this.i * this.grid.columnSize,
                    y: this.grid.y * this.grid.rowSize
                },
                max: {
                    x: this.i * this.grid.columnSize + this.grid.columnSize,
                    y: this.grid.y * this.grid.rowSize + this.grid.rowSize
                }
            }
        };
        this.neighbours = [];
        this.point.pos.x = this.point.pos.min.x + this.grid.min.x + noise(random(100)) * (this.point.pos.max.x - this.point.pos.min.x);
        this.point.pos.y = this.point.pos.min.y + this.grid.min.y + noise(random(100)) * (this.point.pos.max.y - this.point.pos.min.y);
        const _opX = map(this.point.pos.x, this.grid.min.x, width - this.grid.min.x, 0, 10),
            _opY = map(this.point.pos.y, this.grid.min.y, height - this.grid.min.y, 0, 10),
            opX = _opX < 5 ? _opX : 10 - _opX,
            opY = _opY < 5 ? _opY : 10 - _opY;
        this.point.opacity = this.point.initOpacity = opX + opY;
    }
    getPossibleLinks(densityX, densityY) {
        this.grid.x != 0 ? this.neighbours.push({
            x: this.grid.x - 1,
            y: this.grid.y
        }) : 0;
        this.grid.x != densityX ? this.neighbours.push({
            x: this.grid.x + 1,
            y: this.grid.y
        }) : 0;
        this.grid.y != 0 ? this.neighbours.push({
            x: this.grid.x,
            y: this.grid.y - 1
        }) : 0;
        this.grid.y != densityY ? this.neighbours.push({
            x: this.grid.x,
            y: this.grid.y + 1
        }) : 0;
        (this.grid.x != 0 && this.grid.y != 0) ? this.neighbours.push({
            x: this.grid.x - 1,
            y: this.grid.y - 1
        }): 0;
        (this.grid.x != 0 && this.grid.y != densityY) ? this.neighbours.push({
            x: this.grid.x - 1,
            y: this.grid.y + 1
        }): 0;
        (this.grid.x != densityX && this.grid.y != 0) ? this.neighbours.push({
            x: this.grid.x + 1,
            y: this.grid.y - 1
        }): 0;
        (this.grid.x != densityX && this.grid.y != densityY) ? this.neighbours.push({
            x: this.grid.x + 1,
            y: this.grid.y + 1
        }): 0;
    }
    show() {
        stroke(255, this.point.opacity * 2);
        strokeWeight(this.point.size);
        point(this.point.pos.x, this.point.pos.y);
        this.point.firing ? this.animateFire(this.point): 0;
    }
    animateFire (blink) {
        const {maxOpacity, speed, type, initOpacity} = blink;
        blink.firing = true;
        if (blink.opacity < maxOpacity && blink.ascend) {
            blink.opacity += speed;
        } else if (blink.opacity > maxOpacity && blink.ascend) {
            blink.ascend = false;
        } else if (blink.opacity > initOpacity && !blink.ascend) {
            blink.opacity -= speed / 2;
        } else if (blink.opacity < initOpacity && !blink.ascend) {
            blink.opacity = initOpacity;
            blink.ascend = true;
            blink.firing = false;
        }
    }
}