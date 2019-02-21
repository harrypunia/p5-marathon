class Core {
    constructor(r) {
        this.r = r;
        this.particles = []
        for(let i = 0; i < 50; i++) {
            this.particles[i] = new Particle(random(width/2 - r, width/2 + r), random(height/2 - r, height/2 + r), random(20));
        }
    }
    draw() {
        for(let i in this.particles) {
            this.particles[i].show(255, 100, 100);
            for(let j in this.particles) {
                this.particles[i].isCloseTo(this.particles[j]) ? this.particles[i].repel(this.particles[j]) : 0;
            }
        }
    }
}
