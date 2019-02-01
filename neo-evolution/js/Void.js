class Void {
    constructor(x, y, grid) {
        console.log(x, y, grid);
        this.grid = grid;
        this.x = x;
        this.y = y;
        this.fireAttr = {
            firing: false,
            ascend: true,
            maxOpacity: 150,
            speed: 4,
            size: random(1) > .5 ? 8 : 4,
        };
        this.neighbours = [];
        this.fireAttr.opacity = this.fireAttr.initOpacity = this.defineOpacity();
    }
    show() {
        stroke(255, this.fireAttr.opacity * 2);
        strokeWeight(this.fireAttr.size);
        point(this.x, this.y);
        this.fireAttr.firing ? this.fire(this.fireAttr): 0;
    }
    fire (fireAttr) {
        const {maxOpacity, speed, type, initOpacity} = fireAttr;
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
    defineOpacity() {
        const _opX = map(this.x, this.grid.min.x, width - this.grid.min.x, 0, 10);
        const _opY = map(this.y, this.grid.min.y, height - this.grid.min.y, 0, 10);
        const opX = _opX < 5 ? _opX : 10 - _opX;
        const opY = _opY < 5 ? _opY : 10 - _opY;
        return (opX + opY);
    }
    getNeighbours() {
        this.grid.x != 0 ? this.neighbours.push({
            x: this.grid.x - 1,
            y: this.grid.y
        }) : 0;
        this.grid.x != this.grid.density.x ? this.neighbours.push({
            x: this.grid.x + 1,
            y: this.grid.y
        }) : 0;
        this.grid.y != 0 ? this.neighbours.push({
            x: this.grid.x,
            y: this.grid.y - 1
        }) : 0;
        this.grid.y != this.grid.density.y ? this.neighbours.push({
            x: this.grid.x,
            y: this.grid.y + 1
        }) : 0;
        (this.grid.x != 0 && this.grid.y != 0) ? this.neighbours.push({
            x: this.grid.x - 1,
            y: this.grid.y - 1
        }): 0;
        (this.grid.x != 0 && this.grid.y != this.grid.density.y) ? this.neighbours.push({
            x: this.grid.x - 1,
            y: this.grid.y + 1
        }): 0;
        (this.grid.x != this.grid.density.x && this.grid.y != 0) ? this.neighbours.push({
            x: this.grid.x + 1,
            y: this.grid.y - 1
        }): 0;
        (this.grid.x != this.grid.density.x && this.grid.y != this.grid.density.y) ? this.neighbours.push({
            x: this.grid.x + 1,
            y: this.grid.y + 1
        }): 0;
    }
}