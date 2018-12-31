class CrazyTriangle {
    constructor(s, i) {
        this.s = s;
        this.pos1 = createVector(0, -this.s);
        this.initPos1 = createVector(0, -this.s);
        this.pos2 = createVector(this.s, this.s);
        this.initPos2 = createVector(this.s, this.s);
        this.pos3 = createVector(-this.s, this.s);
        this.initPos3 = createVector(-this.s, this.s);
        this.vel1 = createVector(0, 0);
        this.vel2 = createVector(0, 0);
        this.vel3 = createVector(0, 0);
        this.acc1 = createVector(0, 0);
        this.acc2 = createVector(0, 0);
        this.acc3 = createVector(0, 0);
        //this.chance = 100;
        this.i = i;
    }
    show() {
        applyMatrix();
        noFill();
        let altC = 8 % (this.i + 1) == 0 ? 3 : 9 % (this.i + 1);
        stroke(col[altC].r, col[altC].g, col[altC].b);
        translate(width / 2, height / 2);
        triangle(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
        resetMatrix();
    }
    update(vol) {
        this.return();
        this.degradeVelocity(0.1, this.vel1);
        this.degradeVelocity(0.1, this.vel2);
        this.degradeVelocity(0.1, this.vel3);
        this.triggerCrazy(vol);
        this.physicsEngine(this.pos1, this.vel1, this.acc1);
        this.physicsEngine(this.pos2, this.vel2, this.acc2);
        this.physicsEngine(this.pos3, this.vel3, this.acc3);
    }
    physicsEngine(pos, vel, acc) {
        vel.add(acc);
        pos.add(vel);
        acc.mult(0);
    }
    applyForce(acc, force) {
        acc.add(force);
    }
    triggerCrazy(vol) {
        //let chance = Math.floor(random(this.chance)) == 1;
        this.crazy(vol, this.vel1);
        //let chance2 = Math.floor(random(this.chance)) == 1;
        this.crazy(vol, this.vel2);
        //let chance3 = Math.floor(random(this.chance)) == 1;
        this.crazy(vol, this.vel3);
    }
    crazy(vol, vel) {
        let chance = Math.floor(random(4)),
            force;
        chance == 0 ? force = createVector(-vol, -vol) : chance == 1 ? force = createVector(-vol, vol) : chance == 2 ? force = createVector(vol, -vol) : force = createVector(vol, vol);
        vel.x = force.x;
        vel.y = force.y;
    }
    return () {
        if (this.moved(this.pos1, this.initPos1)) {
            let returnForce = this.initPos1.copy().sub(this.pos1);
            this.applyForce(this.acc1, returnForce);
        }
        if (this.moved(this.pos2, this.initPos2)) {
            let returnForce = this.initPos2.copy().sub(this.pos2);
            this.applyForce(this.acc2, returnForce);
        }
        if (this.moved(this.pos3, this.initPos3)) {
            let returnForce = this.initPos3.copy().sub(this.pos3);
            this.applyForce(this.acc3, returnForce);
        }
    }
    moved(a, b) {
        if (a.x != b.x || a.y != b.y) {
            return true
        } else {
            return false;
        }
    }
    degradeVelocity(force, vel) {
        vel.x > 0 ? vel.x -= force : vel < 0 ? vel.x += force : 0;
    }
}
