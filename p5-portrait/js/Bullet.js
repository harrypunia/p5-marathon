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
            stroke(r, g, b, 255);
            strokeWeight(2);
            this.x += this.xInc;
            this.y += this.yInc;
        }
    }
    reset() {
        if (this.x > width || this.x < 0) {
            this.x = this.initX;
            this.y = this.initY;
            this.shoot = false;
            stroke(0)
        } else if (this.y < 0 || this.y > height) {
            this.x = this.initX;
            this.y = this.initY;
            this.shoot = false;
            stroke(0)
        }
    }
}
