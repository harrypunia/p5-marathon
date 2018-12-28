class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);
        this.r = 1
    };
    show() {
        fill(255, 20);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
    update() {
        this.depth(this.pos);
        this.boundry(this.pos)
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    applyForce(force) {
        this.vel.add(this.acc);
    }
    depth(pos) {
        let z = {
            x: Math.abs(map(this.pos.x, 0, width, -30, 30)),
            y: Math.abs(map(this.pos.y, 0, height, -30, 30))
        }
        this.r = (z.x + z.y) / 2;
    }
    boundry(pos) {
        (pos.x < -10 || pos.y < -10 || pos.y > height + 10 || pos.x > width + 10) ? this.resetPos(pos): 0;
    }
    resetPos(pos) {
        pos.x = width / 2;
        pos.y = height / 2;
        this.r = 0
    }
}
