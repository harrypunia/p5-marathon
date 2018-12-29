class Particle {
    constructor(sens) {
        this.pos = createVector(0, 0);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);
        this.r = 10
        this.sensitivity = sens
    };
    show() {
        fill(255, 20);
        noStroke();
        applyMatrix();
        translate(width / 2, height / 2);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        resetMatrix();
    }
    update(spec) {
        this.depth(this.pos);
        this.boundry(this.pos)
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        applyMatrix();
        let capSpec = spec > this.sensitivity ? this.sensitivity : spec,
            mapSpec = map(capSpec, 0, this.sensitivity, 1, 2),
            center = createVector(0, 0),
            eq = center.copy().sub(this.pos);
        stroke(255);
        translate(width / 2, height / 2);
        eq.setMag(mapSpec);
        this.vel.mult(mapSpec)
        //        line(center.x, center.y, eq.x, eq.y);
        resetMatrix();
    }
    applyForce(force) {
        this.acc.add(force);
    }
    depth(pos) {
        let z = {
            x: Math.abs(map(this.pos.x, -width / 2, width / 2, -30, 30)),
            y: Math.abs(map(this.pos.y, -height / 2, height / 2, -30, 30))
        }
        //this.r = (z.x + z.y) / 2;
    }
    boundry(pos) {
        (pos.x < -(width / 2) - 10 || pos.y < -(height / 2) - 10 || pos.y > (height / 2) + 10 || pos.x > (width / 2) + 10) ? this.resetPos(pos): 0;
    }
    resetPos(pos) {
        pos.x = 0;
        pos.y = 0;
        this.r = 0
    }
}
