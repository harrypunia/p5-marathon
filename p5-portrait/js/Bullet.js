class Bullet {
    constructor(x, y) {
        this.xOffset = random(-50, 50);
        this.YOffset = random(-50, 50);
        this.initX = x - this.xOffset;
        this.initY = y - this.YOffset;
        this.x = x - this.xOffset;
        this.y = y - this.YOffset;
        this.xInc = 0;
        this.yInc = 0;
        this.shoot = false;
        this.death = random(20);
        this.life = Math.floor(random(10));
    }
    show() {
        point(this.x, this.y);
    }
    update(r, g, b) {
        if (this.shoot == true) {
            let mR = map(r, 0, 255, 0, col["r"]),
                mG = map(g, 0, 255, 0, col["g"]),
                mB = map(b, 0, 255, 0, col["b"]),
                _mA = map(this.yInc, -2, 2, 0, 510),
                mA = _mA < 255 ? _mA : 510 - _mA;
            stroke(mR, mG, mB, mA);
            strokeWeight(2);
            this.x += this.xInc;
            this.y += this.yInc;
        }
    }
    reset(to) {
        if (to == 'left') {
            if (this.x > (width / 1.75) + this.death) {
                this.x = this.initX;
                this.y = this.initY;
                this.shoot = false;
                this.life--;
                stroke(0);
            }
        } else {
            if (this.x < (width / 3) - this.death) {
                this.x = this.initX;
                this.y = this.initY;
                this.shoot = false;
                this.life--;
                stroke(0);
            }
        }
        if (this.y < 0 || this.y > height) {
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
