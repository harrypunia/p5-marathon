class Bullet {
    constructor(x, y) {
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
            stroke(r, g, b);
            this.x += this.xInc;
            this.y += this.yInc;
        }
    }
    reset() {
        if (this.x > width) {
            this.x = 0;
            this.y = height / 2;
            this.shoot = false;
        }
        if (this.y < 0 || this.y > height) {
            this.x = 0;
            this.y = height / 2;
            this.shoot = false;
        }
    }
}
