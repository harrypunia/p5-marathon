class Bullet {
    constructor(x, y) {
        this.xOffset = random(-40, 40);
        this.YOffset = random(-40, 40);
        this.initX = x - this.xOffset;
        this.initY = y - this.YOffset;
        this.x = x - this.xOffset;
        this.y = y - this.YOffset;
        this.xInc = 0;
        this.yInc = 0;
        this.shoot = false;
        this.death = random(-40, 40);
        this.life = Math.floor(random(5));
        this.col = Math.floor(random(8));
        this.prevR;
        this.prevG;
        this.prevB;
    }
    show() {
        point(this.x, this.y);
    }
    update(r, g, b) {
        if (this.shoot == true) {
            r == undefined ? r = this.prevR : this.prevR = r;
            g == undefined ? g = this.prevG : this.prevG = g;
            b == undefined ? b = this.prevB : this.prevB = b;
            let mR = map(r, 0, 255, 0, col[this.col].r),
                mG = map(g, 0, 255, 0, col[this.col].g),
                mB = map(b, 0, 255, 0, col[this.col].b),
                _mA = map(this.yInc, -2, 2, 0, 510),
                mA = _mA < 255 ? _mA : 510 - _mA;
            stroke(mR, mG, mB, mA);
            strokeWeight(2);
            this.x += this.xInc;
            this.y += this.yInc;
        }
    }
    reset(to, img) {
        if (to == 'left') {
            if (this.x > (width / 7) + this.death) {
                this.x = this.initX;
                this.y = this.initY;
                this.shoot = false;
                this.life--;
                stroke(0);
            }
        } else {
            if (this.x < (width / 12) + this.death) {
                this.x = this.initX;
                this.y = this.initY;
                this.shoot = false;
                this.life--;
                stroke(0);
            }
        }
        if (this.y < this.death || this.y > img.height + this.death) {
            this.x = this.initX;
            this.y = this.initY;
            this.shoot = false;
            this.life--;
            stroke(0);
        }
        if (this.life <= 0) {
            stroke(0, 0);
            this.xInc = 0;
            this.yInc = 0;
            this.x = 0;
            this.y = 0;
        }
    }
}
