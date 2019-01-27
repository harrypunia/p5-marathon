class Atom {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show() {
        for (let i in this.electrons) {
            this.electrons[i].show();
        }
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}

class Electron {
    constructor(x, y, r, i, population) {
        this.x = x;
        this.y = y;
        this.i = i;
        this.population = population;
        this.r = r;
        this.angle
    }
    show() {
        point(this.x, this.y);
    }
    revolve() {}
}
