class Circle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.alive = false;
    }
    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    update(vol) {
        if (this.alive == false && vol > 2) {
            this.r = 20;
            this.x = random(width);
            this.y = random(height);
            this.alive = true;
        }
    }
    degrade() {
        if (this.r > 0) {
            this.r -= 0.1;
        } else {
            this.r = 0;
            this.x = 0;
            this.y = 0;
            this.alive = false;
        }
    }
}
