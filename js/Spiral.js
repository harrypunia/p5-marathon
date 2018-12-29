class Spiral {
    constructor(r, n, freq, dir) {
        this.a = 0;
        this.r = r;
        this.n = n;
        this.freq = freq;
        this.dir = dir;
        this.pos = createVector(0, 0);
        this.elements = [];
        this.chance = 0;
        this.shape = [];
        this.color = [];
    }
    defineShape() {
        for (let i = 0; i < this.n; i++) {
            this.shape[i] = this.chance = Math.floor(random(3));
            this.color[i] = this.chance = Math.floor(random(3));
        }
        rectMode(CENTER);
    }
    show(audio) {
        for (let i = 0; i < this.n; i++) {
            noStroke();
            let mapIndex = map(i / this.n, 0, 1, 0, 2),
                offset = Math.PI * mapIndex;
            this.pos.x = this.r * Math.cos(this.a + offset) + (width / 2) + audio[i];
            this.pos.y = this.r * Math.sin(this.a + offset) + (height / 2) + audio[i];
            fill(col[this.color[i]].r, col[this.color[i]].g, col[this.color[i]].b);
            this.elements[i] = this.shape[i] == 0 ? ellipse(this.pos.x, this.pos.y, 10, 10) : this.shape[i] == 1 ? triangle(this.pos.x - 5, this.pos.y + 5, this.pos.x, this.pos.y - 5, this.pos.x + 5, this.pos.y + 5) : rect(this.pos.x, this.pos.y, 10, 10);
        }
        (this.dir & 2) == 1 ? this.a += this.freq : this.a -= this.freq;
    }
}
