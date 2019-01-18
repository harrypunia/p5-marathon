class Bullet {
    constructor(x, y) {
        this.initX = x;
        this.initY = y;
        this.x = x;
        this.y = y;
        this.xInc = 0;
        this.yInc = 0;
        this.shoot = false;
    }
    show() {
        point(this.x, this.y);
    }
    update(r, g, b) {
        if (this.shoot == true) {
            let mR = map(r, 0, 255, 0, 227),
                mG = map(g, 0, 255, 0, 164),
                mB = map(b, 0, 255, 0, 101),
                _mA = map(this.yInc, -1, 1, 0, 510),
                mA = _mA < 255 ? _mA : 255 - _mA;
            stroke(mR, mG, mB, mA);
            strokeWeight(2);
            this.x += this.xInc;
            this.y += this.yInc;
        }
    }
    reset(to) {
        if (to == 'left') {
            if (this.x > width / 1.75 || this.x < width / 4) {
                this.x = this.initX;
                this.y = this.initY;
                this.shoot = false;
                stroke(0);
            }
        } else {
            if (this.x < width / 3 || this.x > width / 1.5) {
                this.x = this.initX;
                this.y = this.initY;
                this.shoot = false;
                stroke(0);
            }
        }
        if (this.y < 0 || this.y > height) {
            this.x = this.initX;
            this.y = this.initY;
            this.shoot = false;
            stroke(0);
        }
    }
}
