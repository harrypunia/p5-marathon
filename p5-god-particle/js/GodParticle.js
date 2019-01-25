class GodParticle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xOff = random(100);
        this.yOff = random(100);
        this.lineOff = random(100);
        this.strokeOp;
        this.offset = random(100);
        this.toX = Math.floor(random(2)) == 0;
    }
    show(vol, r, g, b) {
        this.update(vol / 100);
        this.r = (vol * 20) + 1;
        fill(r, g, b, this.strokeOp);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    update(vol) {
        this.lineOff += 0.01;
        this.strokeOp = map(noise(this.lineOff), 0, 1, 0, 255)
        this.xOff += vol;
        this.yOff += vol;
    }
    move() {
        this.x = map(noise(this.xOff), 0, 1, -width / 2, width / 2);
        this.y = map(noise(this.yOff), 0, 1, -height / 2, height / 2);
        if (this.x < 0) {
            this.x -= vol * 50;
        } else {
            this.x += vol * 50;
        }
        if (this.y < 0) {
            this.y -= vol * 50;
        } else {
            this.y += vol * 50;
        }
    }
    connectCorner(i, r, g, b) {
        if (i % 2 == 0) {
            stroke(r, g, b, this.strokeOp);
            if (this.toX) {
                if (this.x < 0 && this.y < 0) {
                    line(-width / 2 + this.offset, -height / 2, this.x, this.y);
                } else if (this.x < 0 && this.y > 0) {
                    line(-width / 2 + this.offset, height / 2, this.x, this.y);
                } else if (this.x > 0 && this.y < 0) {
                    line(width / 2 + this.offset, -height / 2, this.x, this.y);
                } else {
                    line(width / 2 + this.offset, height / 2, this.x, this.y);
                }
            } else {
                if (this.x < 0 && this.y < 0) {
                    line(-width / 2, -height / 2 + this.offset, this.x, this.y);
                } else if (this.x < 0 && this.y > 0) {
                    line(-width / 2, height / 2 + this.offset, this.x, this.y);
                } else if (this.x > 0 && this.y < 0) {
                    line(width / 2, -height / 2 + this.offset, this.x, this.y);
                } else {
                    line(width / 2, height / 2 + this.offset, this.x, this.y);
                }
            }
        }
    }
    connect(other, r, g, b) {
        let gap = dist(this.x, this.y, other.x, other.y);
        noFill();
        stroke(r, g, b, this.strokeOp);
        line(this.x, this.y, other.x, other.y);
    }
}
