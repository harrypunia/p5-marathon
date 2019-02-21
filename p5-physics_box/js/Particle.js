class Particle {
    constructor(x, y, r) {
        this.r = r;
        this.pos = createVector(x, y);
        this.storePos = this.pos.copy();
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.storeVel = this.vel.copy();
        this.acc = createVector(0, 0);
        this.hit = false;
        this.counter = 0;
    }
    show(r, g, b) {
        this.update();
        if (this.hit) {
            fill(r, g, b);
            noStroke();
            this.hit = false;
        } else {
            noFill();
            stroke(r, g, b);
            this.counter = 0;
        }
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
    update() {
        this.border();
        this.resetVector(this.pos, this.storePos, 'auto');
        this.resetVector(this.vel, this.storeVel, 2);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    isCloseTo(other) {
        const gap = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        return gap <= this.r + other.r
    }
    repel(other) {
        this.hit = true;
        //other.hit = true;
        const thisPos = this.pos.copy();
        const otherPos = other.pos.copy();
        let force = thisPos.sub(otherPos);
        force.mult(0.1);
        this.acc.add(force);
        force.mult(-1);
        other.acc.add(force);
    }
    resetVector(main, store, force) {
        if (force = 'auto') {
            force = dist(main.x, main.y, store.x, store.y) / 50;
        }
        main.x < store.x ? main.x += force : main.x > store.x ? main.x -= force : Math.abs(main.x - store.x) < force ? main.x = store.x : 0;
        main.y < store.y ? main.y += force : main.y > store.y ? main.y -= force : Math.abs(main.y - store.y) < force ? main.y = store.y : 0;
    }
    border() {
        (this.pos.x < this.r || this.pos.x > width - this.r) ? this.vel.x *= -1: 0;
        (this.pos.y < this.r || this.pos.y > height - this.r) ? this.vel.y *= -1: 0;
    }
}
