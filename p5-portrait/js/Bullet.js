class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        stroke(0);
        point(this.x, this.y);
    }
    shoot(col) {
        stroke(col);
        point(this.x, this.y);
    }
}
