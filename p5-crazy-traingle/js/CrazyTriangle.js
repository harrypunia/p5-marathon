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
        this.chance = 200;
        this.altC = Math.floor(random(1, 5));
        this.i = i;
    }
    show() {
        applyMatrix();
        translate(width / 2, height / 2);
        noStroke();
        stroke(255, (1 - (this.i / 5)));
        fill(col[this.altC].r, col[this.altC].g, col[this.altC].b, (1 - (this.i / 100)));
        triangle(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
        resetMatrix();
    }
    update(vol) {
        vol > 20 ? this.chance = 50 : this.chance == 200;
        if (this.i == 0 && vol > 20) {
            fill(200, 100, 100, 20);
            triangle((width / 2), (height / 2) - this.s, (width / 2) + this.x, (height / 2) + this.S, (width / 2) - this.s, (height / 2) + this.s);
            background(255, 1);
        }
        this.degradePos(3, this.pos1, this.initPos1);
        this.degradePos(3, this.pos2, this.initPos2);
        this.degradePos(3, this.pos3, this.initPos3);
        this.degradeVel(.7, this.vel1);
        this.degradeVel(.7, this.vel2);
        this.degradeVel(.7, this.vel3);
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
        let force;
        if (vel == this.vel1) {
            force = createVector(0, -vol)
        } else if (vel == this.vel2) {
            force = createVector(vol, vol)
        } else {
            force = createVector(-vol, vol)
        }
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
    degradePos(force, pos, initPos) {
        pos.x > initPos.x ? pos.x -= force : pos.x < initPos.x ? pos.x += force : 0;
        pos.y > initPos.y ? pos.y -= force : pos.y < initPos.y ? pos.y += force : 0;
    }
    degradeVel(force, vel) {
        vel.x > 0 ? vel.x -= force : vel.x < 0 ? vel.x += force : 0;
        vel.y > 0 ? vel.y -= force : vel.y < 0 ? vel.y += force : 0;
    }
}
