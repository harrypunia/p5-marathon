class CrazyLine {
    constructor(x, y, l) {
        this.transX = x;
        this.transY = y;
        this.length = l;
        this.yOff = 0;
    }
    show(vol) {
        stroke(255);
        applyMatrix();
        translate(this.transX, this.transY);
        rotate(vol);
        line(0, 0, this.length, this.length);
        resetMatrix();
    }
}
