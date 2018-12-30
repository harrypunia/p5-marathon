class Creeper {
    constructor(x, y) {
        this.center = {
            x: width / 2,
            y: height / 2
        };
        this.pos = {
            x: x,
            y: y
        };
        this.resetPos = {
            x: x,
            y: y
        }
        this.step = {
            x: x,
            y: y
        };
        this.dist = {
            x: 0,
            y: 0
        }
        this.lastStroke = {
            r: 0,
            g: 0,
            b: 0
        }
        this.totalSteps = 20;
        this.life = 100;
        this.chance = 100;
        this.core = {
            w: 160,
            h: 160
        }
    }
    show(freq) {
        stroke(this.lastStroke.r, this.lastStroke.g, this.lastStroke.b)
        line(this.pos.x, this.pos.y, this.step.x, this.step.y);
        this.pos.x = this.step.x;
        this.pos.y = this.step.y;
        this.update(freq);
    }
    update(freq) {
        let chance = Math.floor(random(this.chance)) == 1;
        if (chance) {
            this.updateDist();
            this.assignColor();
            strokeWeight(freq / 20);
            if (this.catch()) {
                this.pos.x = this.resetPos.x;
                this.pos.y = this.resetPos.y;
                this.step.x = this.resetPos.x;
                this.step.y = this.resetPos.y;
                this.updateDist();
                say(this.pos);
            } else {
                this.step.x = random(this.pos.x, this.pos.x + (this.dist.x / this.totalSteps));
                this.step.y = random(this.pos.y, this.pos.y + (this.dist.y / this.totalSteps));
            }
        } else {
            strokeWeight(1);
        }
    }
    catch () {
        let coreRange = {
            x: this.core.w / 2,
            y: this.core.h / 2
        }
        if ((this.pos.x > this.center.x - coreRange.x && this.pos.x < this.center.x + coreRange.x) && (this.pos.y > this.center.y - coreRange.y && this.pos.y < this.center.y + coreRange.y)) {
            return true
        } else {
            return false
        }
    }
    updateDist() {
        this.dist.x = this.center.x - this.pos.x;
        this.dist.y = this.center.y - this.pos.y;
    }
    assignColor() {
        let r = col[Math.floor(random(5))].r,
            g = col[Math.floor(random(5))].g,
            b = col[Math.floor(random(5))].b;
        stroke(r, g, b);
        this.lastStroke.r = r;
        this.lastStroke.g = g;
        this.lastStroke.b = b;
    }
}
