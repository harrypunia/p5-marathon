class CrazyLine {
    constructor(x, y, l, i) {
        this.transX = x;
        this.transY = y;
        this.length = l;
        this.xoff = i * 100;
        this.rotateVal;
    }
    show(vol) {
        stroke(255);
        this.rotateVal = noise(this.xoff) * 2;
        applyMatrix();
        translate(this.transX, this.transY);
        rotate(PI);
        line(0, 0, 0, this.length);
        resetMatrix();
        this.xoff += 0.1;
    }
}
