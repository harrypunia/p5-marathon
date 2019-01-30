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
            type: 'point',
            chance: 0.0005,
            firing: false,
            ascend: true,
            max: 150,
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
        this.line = {
            firing: false,
            ascend: true,
            max: 100,
            speed: 4
        };
        this.possibleLinks = [];
        this.getPossibleLinks(densityX, densityY);
        this.point.pos.x = this.point.pos.min.x + this.grid.min.x + noise(random(100)) * (this.point.pos.max.x - this.point.pos.min.x);
        this.point.pos.y = this.point.pos.min.y + this.grid.min.y + noise(random(100)) * (this.point.pos.max.y - this.point.pos.min.y);
        const _opX = map(this.point.pos.x, this.grid.min.x, width - this.grid.min.x, 0, 20),
            _opY = map(this.point.pos.y, this.grid.min.y, height - this.grid.min.y, 0, 20),
            opX = _opX < 10 ? _opX : 20 - _opX,
            opY = _opY < 10 ? _opY : 20 - _opY;
        this.point.opacity = this.point.initOpacity = this.line.opacity = this.line.initOpacity = opX + opY; //Try it later
        let once = true;
    }
    getPossibleLinks(densityX, densityY) {
        this.i != 0 ? this.possibleLinks.push({
            x: this.i - 1,
            y: this.grid.y
        }) : 0;
        this.i != densityX ? this.possibleLinks.push({
            x: this.i + 1,
            y: this.grid.y
        }) : 0;
        this.grid.y != 0 ? this.possibleLinks.push({
            x: this.i,
            y: this.grid.y - 1
        }) : 0;
        this.grid.y != densityY ? this.possibleLinks.push({
            x: this.i,
            y: this.grid.y + 1
        }) : 0;
        (this.i != 0 && this.grid.y != 0) ? this.possibleLinks.push({
            x: this.i - 1,
            y: this.grid.y - 1
        }): 0;
        (this.i != 0 && this.grid.y != densityY) ? this.possibleLinks.push({
            x: this.i - 1,
            y: this.grid.y + 1
        }): 0;
        (this.i != densityX && this.grid.y != 0) ? this.possibleLinks.push({
            x: this.i + 1,
            y: this.grid.y - 1
        }): 0;
        (this.i != densityX && this.grid.y != densityY) ? this.possibleLinks.push({
            x: this.i + 1,
            y: this.grid.y + 1
        }): 0;
    }
    show() {
        stroke(255, this.point.opacity * 2);
        strokeWeight(this.point.size);
        point(this.point.pos.x, this.point.pos.y);
        //(Math.random() < this.point.chance || this.point.firing) ? this.fire(this.point): 0;
        //this.line.firing ? this.fire(this.line) : 0;
    }
    link(other) {
        const inRange = (this.grid.x - other.grid.x == 1) && (Math.abs(this.grid.y - other.grid.y)) <= 1;
        if (inRange) {
            strokeWeight(1);
            other.line.firing ? stroke(255, other.line.opacity) : stroke(255, this.line.opacity);
            line(this.point.pos.x, this.point.pos.y, other.point.pos.x, other.point.pos.y);
        }
    }
    explode(initLinks) {
        let connections = this.genUniqueNumbers(initLinks, this.possibleLinks.length);
        for(let i in connections){
            console.log(this.possibleLinks[connections[i]]);
        }
    }
    genUniqueNumbers(many, max) {
        let uniqueNumbers = []
        while (uniqueNumbers.length < many) {
            let r = Math.floor(Math.random() * max) + 1;
            if (uniqueNumbers.indexOf(r) === -1) uniqueNumbers.push(r);
        }
        return uniqueNumbers;
    }
    fire(other) {
    }
}

/*
const {
            max,
            speed,
            type,
            initOpacity
        } = blink;
        blink.firing = true;
        if (blink.opacity < max && blink.ascend) {
            blink.opacity += speed;
        } else if (blink.opacity > max && blink.ascend) {
            blink.ascend = false;
            type == 'point' ? this.line.firing = true : 0; //This is firing the line
        } else if (blink.opacity > initOpacity && !blink.ascend) {
            blink.opacity -= speed / 2;
        } else if (blink.opacity < initOpacity && !blink.ascend) {
            blink.opacity = initOpacity;
            blink.ascend = true;
            blink.firing = false;
        }
*/
