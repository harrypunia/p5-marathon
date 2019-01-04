class Spiral {
    constructor(r, x, y) {
        this.r = r * 3;
        this.a = 0;
        this.x = x;
        this.y = y;
        this.pos = {
            x: 0,
            y: 0
        }
        this.col = {
            r: 0,
            g: 0,
            b: 0
        }
        this.n = r;
    }
    show(s) {
        let totalParticles = (this.n % 2) == 1 ? 10 : 20;
        applyMatrix();
        translate(this.x, this.y);
        fill(this.col.r, this.col.g, this.col.b);
        noStroke();
        for (let i = 0; i < totalParticles; i++) {
            let mapIndex = map(i / totalParticles, 0, 1, 0, 2),
                offset = Math.PI * mapIndex;
            this.pos.x = (this.r * s) * Math.sin(this.a + offset);
            this.pos.y = (this.r * s) * Math.cos(this.a + offset);
            ellipse(this.pos.x, this.pos.y, s, s);
        }
        resetMatrix();
    }
    update(r, g, b) {
        this.col.r = r < 50 ? 50 : r;
        this.col.g = g < 50 ? 50 : g;
        this.col.b = b < 50 ? 50 : b;
        this.a += .05;
    }
}
