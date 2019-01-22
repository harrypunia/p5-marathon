class Rain {
    constructor(x, y, l) {
        this.storeX = x;
        this.storeY = y;
        this.x = x;
        this.y = y;
        this.l = l;
        this.posX = [];
        this.posY = [];
    }
    preload() {
        for (let i = 0; i < this.l; i++) {
            this.posX[i] = this.x;
            this.posY[i] = this.y - (i * 4);
        }
    }
    show() {
        for (let i = 0; i < this.l; i++) {
            stroke(255);
            point(this.posX[i], this.posY[i]);
        }
    }
    fall() {
        for (let i = 0; i < this.l; i++) {
            this.posY[i] += 2;
            this.posY[i] > (height / 2) + this.l ? this.posY[i] = this.storeY - (i * 4) : 0;
        }
    }
    distort(radX, radY) {
        let gapX = this.x > -radX && this.x < radX;
        //
        if (gapX) {
            for (let i = 0; i < this.l; i++) {
                let gap = dist(this.posX[i], this.posY[i], 0, 0);
                if (gap < radX) {
                    this.posX[i] < 0 ? this.posX[i] += 1 : this.posX[i] > 0 ? this.posX[i] -= 1 : 0;
                } else {
                    this.posX[i] < this.storeX ? this.posX[i] += 1 : this.posX[i] > this.storeX ? this.posX[i] -= 1 : 0;
                }
            }
        } else {
            for (let i = 0; i < this.l; i++) {
                let op_gap = this.posY[i] < 0 && this.posY[i] > -radY,
                    __force = map(this.posX[i], -width / 2, width / 2, 0, 2),
                    _force = __force < 1 ? __force : 2 - __force,
                    force = _force;
                if (op_gap) {
                    this.posX[i] < 0 ? this.posX[i] -= force : this.posX[i] > 0 ? this.posX[i] += force : 0;
                } else {
                    this.posX[i] < this.storeX ? this.posX[i] += force : this.posX[i] > this.storeX ? this.posX[i] -= force : 0;
                }
            }
        }
    }
}
