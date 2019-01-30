class Network {
    constructor() {
        this.particles = [];
        this.density = {
            x: 10,
            y: 6
        }
        for (let i = 0; i < this.density.x * this.density.y; i++) {
            this.particles[i] = new Particle(this.density.x, this.density.y, i); //(density, index);
        }
    }
    show() {
        for (let i in this.particles) {
            this.particles[i].show();
            for (let j in this.particles) {
                i != j ? this.particles[i].link(this.particles[j]) : 0;
            }
        }
    }
}
