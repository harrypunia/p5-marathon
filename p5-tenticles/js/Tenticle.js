class Tenticle {
    constructor(n) {
        this.n = n
        this.angle = 0;
        this.particles = [];
        for (let i = 0; i < n; i++) {
            this.particles[i] = {
                radius: i
            }
        }
    }
    show() {
        applyMatrix();
        translate(width / 2, height / 2);
        for (let i = 0; i < this.particles.length; i++) {
            stroke(255);
            let posX = this.particles[i].r * Math.sin(this.angle + i),
                posY = this.particles[i].r * Math.cos(this.angle + i);
            point(posX, posY);
        }
        this.angle++;
        resetMatrix();
    }
    update(vol) {}
}
