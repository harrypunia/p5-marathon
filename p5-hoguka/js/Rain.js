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
            this.posY[i] = this.y - (i * 2);
        }
    }
    show() {
        for (let i = 0; i < this.l; i++) {
            let __opX = map(this.posX[i], -width / 2, width / 2, 0, 122.5),
                _opX = __opX < 122.5 ? __opX : 255 - __opX,
                __opY = map(this.posY[i], -height / 2, height / 2, 0, 122.5),
                _opY = __opY < 122.5 ? __opY : 255 - __opY,
                op = _opY + _opX;
            stroke(255, op);
            strokeWeight(1);
            point(this.posX[i], this.posY[i]);
        }
    }
    fall() {
        for (let i = 0; i < this.l; i++) {
            this.posY[i] += 2;
            if (this.posY[i] > height / 2) {
                this.posY[i] = this.storeY - (i * 2)
                if (this.posX[i] < 0) {
                    this.posX[i] = this.storeX + random(100);
                } else {
                    this.posX[i] = this.storeX - random(100);
                }
            }
        }
    }
    distort(radX, radY) {
        let gapX = this.x > -radX / 2 && this.x < radX / 2;
        for (let i = 0; i < this.l; i++) {
            let __forceX = map(this.posX[i], -width / 2, width / 2, 0, 2),
                _forceX = __forceX < 1 ? __forceX : 2 - __forceX,
                __forceY = map(this.posY[i], -radY / 2, radY / 2, 0, 1),
                _forceY = __forceY < .5 ? __forceY : 1 - __forceY,
                force = _forceY * _forceX * radX,
                op_gap = this.posY[i] < radY / 2 && this.posY[i] > -radY / 2;
            //
            if (op_gap) {
                this.posX[i] < 0 ? this.posX[i] = this.storeX - force : this.posX[i] > 0 ? this.posX[i] = this.storeX + force : 0;
            }
        }
        //}
        for (let i = 0; i < this.l; i++) {
            this.posX[i] < this.storeX ? this.posX[i] += .8 : this.posX[i] > this.storeX ? this.posX[i] -= .8 : 0;
        }
    }
}
