class Electron {
    constructor(r, showTrail, size, speed) {//non-chaning variables
        this.radius = r;
        this.angle = random(10);
        this.showTrail = showTrail; //same name
        this.population = 150;
        this.length = 4;
        this.size = size;
        this.speed = speed;
    }
    show() {
        this.angle += this.speed;
        this.showTrail ? this.drawTrail() : this.drawLine();
    }
    drawTrail() {
        for (let i = 0; i < this.population; i++) {
            const opacity = 255 - (i / this.population) * 255;
            const size = this.size - (i / this.population) * this.size;
            const {x, y} = this.updatePoint((i / this.population) * this.length); //deconstruction
            fill(170, 16, 214, opacity);
            ellipse(x, y, size, size);
        }
    }
    drawLine() {
        const {x, y} = this.updatePoint(); //closer to the usage in large cases
        stroke(170, 16, 214);
        strokeWeight(this.size);
        point(x, y);
    }
    updatePoint(decay = 0) {
        return {
            x: (this.radius / 4) * Math.sin(this.angle - decay),
            y: this.radius * Math.cos(this.angle - decay)
        }
    }
}