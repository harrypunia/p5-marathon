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
        this.explosion = {
            start: {}
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
    fire() {
        this.explosion.start.x = Math.floor(random(this.density.x));
        this.explosion.start.y = Math.floor(random(this.density.y));
        
        let test = 2
        let connections = this.particles[test].getConnections(4);
        this.particles[test].fire();
//        for(let i in connections) {
//            let index = connections[i].x + this.density.x * connections[i].y
//            this.particles[test].fire(this.particles[index]);
//        }
    }
}
