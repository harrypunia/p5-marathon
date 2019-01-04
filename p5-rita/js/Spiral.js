class Spiral {
    constructor(r) {
        this.r = r;
        this.a = 0;
        this.pos = {
            x: 0,
            y: 0
        }
        this.col = {
            r: 0,
            g: 0,
            b: 0
        }
        this.n = 10;
    }
    show(s) {
        applyMatrix();
        translate(width / 2, height / 2);
        fill(this.col.r, this.col.g, this.col.b);
        noStroke();
        for (let i = 0; i < this.n; i++) {
            let mapIndex = map(i / this.n, 0, 1, 0, 2),
                offset = Math.PI * mapIndex;
            this.pos.x = (this.r * s) * Math.sin(this.a + offset);
            this.pos.y = (this.r * s) * Math.cos(this.a + offset);
            ellipse(this.pos.x, this.pos.y, s, s);
        }
        resetMatrix();
    }
    update(r, g, b) {
        this.col.r = r;
        this.col.g = g;
        this.col.b = b;

        this.a += .01;
    }
}
