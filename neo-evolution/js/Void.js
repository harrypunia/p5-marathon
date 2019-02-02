class Void {
    constructor(x, y, grid) {
        this.grid = grid;
        this.xIndex = grid.xIndex;
        this.yIndex = grid.yIndex;
        this.connectionList = [];
        this.x = x;
        this.y = y;
        this.size = random(1) > .5 ? 8 : 4,
        this.fireAttr = {
            firing: false,
            ascend: true,
            maxOpacity: 150,
            speed: 4,
        };
        this.neighbours = [];
        this.fireAttr.opacity = this.fireAttr.initOpacity = this.defineOpacity();
        this.getNeighbours();
    }
    show() {
        stroke(255, this.fireAttr.opacity * 2);
        strokeWeight(this.size);
        point(this.x, this.y);
        this.fireAttr.firing ? this.fire(this.fireAttr): 0;
    }
    fire (fireAttr) {
        const {maxOpacity, speed, type, initOpacity} = fireAttr;
        fireAttr.firing = true;
        if (fireAttr.opacity < maxOpacity && fireAttr.ascend) {
            fireAttr.opacity += speed;
        } else if (fireAttr.opacity > maxOpacity && fireAttr.ascend) {
            fireAttr.ascend = false;
        } else if (fireAttr.opacity > initOpacity && !fireAttr.ascend) {
            fireAttr.opacity -= speed / 2;
        } else if (fireAttr.opacity < initOpacity && !fireAttr.ascend) {
            fireAttr.opacity = initOpacity;
            fireAttr.ascend = true;
            fireAttr.firing = false;
        }
    }
    canConnectTo(other) {
        const inRange = Math.abs(this.xIndex - other.xIndex) == 1 && Math.abs(this.yIndex - other.yIndex) == 1;
        if(inRange) {
            return this.isNotConnectedTo(other);
        }
    }
    isNotConnectedTo(other) {
        for(let i = 0; i < this.connectionList; i++) {
            if(this.connectionList[i].xIndex == other.xIndex && this.connectionList[i].yIndex == other.yIndex) {
                return false;
                break;
            }
        }
        return true;
    }
    defineOpacity() {
        const _opX = map(this.x, this.grid.min.x, width - this.grid.min.x, 0, 20);
        const _opY = map(this.y, this.grid.min.y, height - this.grid.min.y, 0, 20);
        const opX = _opX < 10 ? _opX : 20 - _opX;
        const opY = _opY < 10 ? _opY : 20 - _opY;
        return (opX + opY);
    }
    getNeighbours() {
        this.xIndex != 0 ? this.neighbours.push({
            x: this.xIndex - 1,
            y: this.yIndex
        }) : 0;
        this.xIndex != this.grid.density.x ? this.neighbours.push({
            x: this.xIndex + 1,
            y: this.yIndex
        }) : 0;
        this.yIndex != 0 ? this.neighbours.push({
            x: this.xIndex,
            y: this.yIndex - 1
        }) : 0;
        this.yIndex != this.grid.density.y ? this.neighbours.push({
            x: this.xIndex,
            y: this.yIndex + 1
        }) : 0;
        (this.xIndex != 0 && this.yIndex != 0) ? this.neighbours.push({
            x: this.xIndex - 1,
            y: this.yIndex - 1
        }): 0;
        (this.xIndex != 0 && this.yIndex != this.grid.density.y) ? this.neighbours.push({
            x: this.xIndex - 1,
            y: this.yIndex + 1
        }): 0;
        (this.xIndex != this.grid.density.x && this.yIndex != 0) ? this.neighbours.push({
            x: this.xIndex + 1,
            y: this.yIndex - 1
        }): 0;
        (this.xIndex != this.grid.density.x && this.yIndex != this.grid.density.y) ? this.neighbours.push({
            x: this.xIndex + 1,
            y: this.yIndex + 1
        }): 0;
    }
}