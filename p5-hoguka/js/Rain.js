class Rain {
    constructor(x, y, l) {
        this.storeX = x;
        this.storeY = y;
        this.x = x;
        this.y = y;
        this.l = l;
    }
    show() {
        for (let i = 0; i < this.l; i++) {
            stroke(255);
            point(this.x, this.y - i);
        }
    }
    fall() {
        this.y++;
        this.boundry();
    }
    boundry() {
        this.y > (height / 2) + this.l ? this.y = this.storeY : 0;
    }
    distort(rad) {
        let gapX = this.x > -rad && this.x < rad,
            gapY = this.y > -rad && this.y < rad,
            force = Math.cos(this.y) * 10;
        //
        if (gapX && gapY) {

        }
    }
}
