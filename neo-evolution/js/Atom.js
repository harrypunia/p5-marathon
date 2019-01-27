class Atom {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.electron = {
            x: null,
            y: null
        };
    }
    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    update() {

    }
    displayElectrons(population, radius) {
        for (let i = 0; i < population; i++) {
            let angle = (i / population) * 3.14
            this.electrons[i].x = radius * Math.sin(angle);
            this.electrons[i].y = radius * Math.cos(angle);
        }
    }
}
