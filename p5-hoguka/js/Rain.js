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
    distort(rad) {
        let gapX = this.x > -rad && this.x < rad,
            force = 20;
        //
        if (gapX) {
            for (let i = 0; i < this.l; i++) {
                let gap = dist(this.posX[i], this.posY[i], 0, 0);
                if (gap < rad) {
                    this.posX[i] < 0 ? this.posX[i] += 1 : this.posX[i] > 0 ? this.posX[i] -= 1 : 0;
                } else {
                    this.posX[i] < this.storeX ? this.posX[i] += 1 : this.posX[i] > this.storeX ? this.posX[i] -= 1 : 0;
                }
            }
        }
    }
}
