class Particle {
    constructor(x, y, r) {
        this.r = r;
        this.pos = createVector(x, y);
        this.vel = createVector(random(-5, 5), random(-5, 5));
        this.storeVel = this.vel.copy();
        this.acc = createVector(0, 0);
    }
    show(r, g, b) {
        this.update();
        fill(r, g, b);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.airFriction(100);
    }
    isCloseTo(other) {
        const gap = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        return gap <= this.r + other.r
    }
    repel(other) {
        const thisPos = this.pos.copy();
        const otherPos = other.pos.copy();
        
        let force = thisPos.sub(otherPos);
        this.appleForce(force);
        force.mult(-1);
        other.appleForce(force);
    }
    appleForce(force) {
        this.acc.add(force);
    }
    airFriction(friction) {
        this.vel.x < this.storeVel.x ? this.vel.x += friction : this.vel.x > this.storeVel.x ? this.vel.x -= friction : Math.abs(this.vel.x - friction)
    }
}