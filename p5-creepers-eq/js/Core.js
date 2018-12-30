class Core {
    constructor(s, i) {
        this.x = 0;
        this.y = 0;
        this.initR = s;
        this.r = s;
        this.i = i;
    }
    show() {
        let altC = 8 % (this.i + 1) == 0 ? 3 : 9 % (this.i + 1);
        applyMatrix();
        translate(width / 2, height / 2);
        stroke(col[altC].r, col[altC].g, col[altC].b, 10);
        fill(col[altC].r, col[altC].g, col[altC].b, 1);
        ellipse(this.x, this.y, this.r, this.r);
        resetMatrix();
    }
    update(freq) {
        //say(freq);
        //this.r = freq > this.initR ? freq : freq > 80 ? freq * 5 : this.initR;
        this.r = freq > this.initR ? freq : this.initR;
    }
}
