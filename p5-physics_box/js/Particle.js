class Particle {
    constructor(x, y, r) {
        this.r = r;
        this.pos = createVector(x, y);
        this.storePos = this.pos.copy();
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
        this.airFriction(2);
        this.returnForce(2);
        this.border();
    }
    isCloseTo(other) {
        const gap = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        return gap <= this.r + other.r
    }
    repel(other) {
        const thisPos = this.pos.copy();
        const otherPos = other.pos.copy();
        
        let force = thisPos.sub(otherPos);
        force.mult(0.5);
        this.appleForce(force);
        force.mult(-1);
        other.appleForce(force);
    }
    appleForce(force) {
        this.acc.add(force);
    }
    returnForce(force) {
        this.pos.x < this.storePos.x ? this.pos.x += force : this.pos.x > this.storePos.x ? this.vel.x -= force : Math.abs(this.pos.x - this.storePos.x) < force ? this.pos.x = this.storePos.x : 0;
        this.pos.y < this.storePos.y ? this.pos.y += force : this.pos.y > this.storePos.y ? this.vel.y -= force : Math.abs(this.pos.y - this.storePos.y) < force ? this.pos.y = this.storePos.y : 0;
    }
    airFriction(friction) {
        this.vel.x < this.storeVel.x ? this.vel.x += friction : this.vel.x > this.storeVel.x ? this.vel.x -= friction : Math.abs(this.vel.x - this.storeVel.x) < friction ? this.vel.x = this.storeVel.x : 0;
        this.vel.y < this.storeVel.y ? this.vel.y += friction : this.vel.y > this.storeVel.y ? this.vel.y -= friction : Math.abs(this.vel.y - this.storeVel.y) < friction ? this.vel.y = this.storeVel.y : 0;
    }
    border() {
        (this.pos.x < this.r || this.pos.x > width - this.r) ? this.vel.x *= -1 : 0;
        (this.pos.y < this.r || this.pos.y > height - this.r) ? this.vel.y *= -1 : 0;
    }
}