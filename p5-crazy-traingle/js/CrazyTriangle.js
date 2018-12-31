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
        this.chance = 100;
        this.i = i;
    }
    show() {
        applyMatrix();
        translate(width / 2, height / 2);
        let altC = 9 % (this.i + 1) == 0 ? 3 : 9 % (this.i + 1);
        stroke(col[altC].r, col[altC].g, col[altC].b);
        fill(col[altC].r, col[altC].g, col[altC].b, 10);
        triangle(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
        resetMatrix();
    }
    update(vol) {
        //this.return();
        this.degradeVelocity(1, this.pos1, this.initPos1);
        this.degradeVelocity(1, this.pos2, this.initPos2);
        this.degradeVelocity(1, this.pos3, this.initPos3);
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
    applyForce(vel, force) {
        vel.add(force);
    }
    triggerCrazy(vol) {
        let chance = Math.floor(random(this.chance));
        if (chance == 1) {
            this.crazy(vol, this.vel1);
        } else if (chance == 2) {
            this.crazy(vol, this.vel2);
        } else if (chance == 3) {
            this.crazy(vol, this.vel3);
        }
    }
    crazy(vol, vel) {
        let force,
            chance = Math.floor(random(2));
        if (vel == this.vel1) {
            chance == 0 ? force = createVector(0, -vol) : force = createVector(0, vol);
        } else if (vel == this.vel2) {
            chance == 0 ? force = createVector(0, vol) : force = createVector(0, -vol);
        } else {
            chance == 0 ? force = createVector(0, vol) : force = createVector(0, -vol);
        }
        vol * ((this.i * 2) + 1)
        vel.x = force.x;
        vel.y = force.y;
    }
    moved(a, b) {
        if (a.x != b.x || a.y != b.y) {
            return true
        } else {
            return false;
        }
    }
    degradeVelocity(force, pos, initPos) {
        pos.x > initPos.x ? pos.x -= force : pos.x < initPos.x ? pos.x += force : 0;
        pos.y > initPos.y ? pos.y -= force : pos.y < initPos.y ? pos.y += force : 0;
    }
}
