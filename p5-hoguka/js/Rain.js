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
            this.posY[i] = this.y - (i * 8);
        }
    }
    show() {
        for (let i = 0; i < this.l; i++) {
            stroke(255);
            strokeWeight(1);
            point(this.posX[i], this.posY[i]);
        }
    }
    fall() {
        for (let i = 0; i < this.l; i++) {
            this.posY[i] += 2;
            this.posY[i] > (height / 2) + this.l ? this.posY[i] = this.storeY - (i * 8) : 0;
        }
    }
    distort(radX, radY) {
        let gapX = this.x > -radX / 2 && this.x < radX / 2;
        for (let i = 0; i < this.l; i++) {
            let __force = map(this.posX[i], -width / 2, width / 2, 0, 2),
                _force = __force < 1 ? __force : 2 - __force,
                force = _force * radX,
                op_gap = this.posY[i] < radY / 2 && this.posY[i] > -radY / 2;
            //
            if (op_gap) {
                this.posX[i] < 0 ? this.posX[i] = this.storeX + force : this.posX[i] > 0 ? this.posX[i] = this.storeX - force : 0;
            }
        }
        //}
        for (let i = 0; i < this.l; i++) {
            this.posX[i] < this.storeX ? this.posX[i] += .8 : this.posX[i] > this.storeX ? this.posX[i] -= .8 : 0;
        }
    }
}
