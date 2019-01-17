class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xInc = 0;
        this.yInc = 0;
        this.shoot = false;
    }
    show() {
        stroke(0);
        point(this.x, this.y);
    }
    update(r, g, b) {
        stroke(r, g, b);
        console.log(r, g, b);
        if (this.shoot == true) {
            this.x += this.xInc;
            this.y += this.yInc;
        }
    }
}
