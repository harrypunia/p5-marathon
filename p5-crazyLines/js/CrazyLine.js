class CrazyLine {
    constructor(x, y, l, i) {
        this.transX = x;
        this.transY = y;
        this.length = l;
        this.xoff = i * 100;
        this.parameter = 20;
        this.rotateVal;
    }
    show(vol) {
        this.rotateVal = noise(this.xoff) * 2;
        this.transXVal = map(noise(this.xoff), 0, 1, -.1, .1);
        this.transYVal = map(noise(this.xoff + 1000), 0, 1, -.1, .1);
        let _opX = map(this.transX, 0, width, 0, 10),
            opX = _opX < 5 ? _opX : 10 - _opX,
            _opY = map(this.transY, 0, height, 0, 10),
            opY = _opY < 5 ? _opY : 10 - _opY;
        push();
        stroke(255, opX + opY);
        this.transX += this.transXVal;
        this.transY += this.transYVal;
        translate(this.transX, this.transY);
        rotate(degrees(this.rotateVal));
        line(0, 0, 0, this.length + (vol * 10));
        pop();
        this.xoff += vol / 100;
    }
    boundry() {
        if (this.transX <= -this.parameter) {
            this.transX = width + this.parameter;
        } else if (this.transX >= width + this.parameter) {
            this.transX = -this.parameter;
        }
        if (this.transY <= -this.parameter) {
            this.transY = height + this.parameter;
        } else if (this.transY >= height + this.parameter) {
            this.transY = -this.parameter;
        }
    }
}
