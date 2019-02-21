class Core {
    constructor(r) {
        this.r = r;
        this.particles = []
        for(let i = 0; i < 100; i++) {
            const randR = random(r);
            const randA = random(6.28);
            const x = randR * Math.sin(randA);
            const y = randR * Math.cos(randA);
            const radius = random(20);
            this.particles[i] = new Particle(width/2 + x, height/2 + y , radius);
        }
    }
    draw(r, g, b) {
        for(let i in this.particles) {
            this.particles[i].show(r, g, b);
            for(let j in this.particles) {
                this.particles[i].isCloseTo(this.particles[j]) ? this.particles[i].repel(this.particles[j]) : 0;
            }
        }
    }
}
