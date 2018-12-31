class CrazyTriangle {
    constructor(s) {
        this.s = s;
        this.pos1 = createVector(0, -this.s);
        this.pos2 = createVector(this.s, this.s);
        this.pos3 = createVector(-this.s, this.s);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.chance = 100;
    }
    show() {
        applyMatrix();
        noFill();
        stroke(255);
        translate(width / 2, height / 2);
        triangle(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
        resetMatrix();
    }
    update(vol) {
        this.triggerCrazy(vol);
    }
    triggerCrazy(vol) {
        let chance = Math.floor(random(this.chance)) == 1;
        chance ? this.crazy(vol) : 0;
    }
    crazy(vol) {
        let chance = Math.floor(random(2)) == 0,
            force;
        chance ? force = createVector(-vol, -vol) : force = createVector(vol, vol);
        this.acc.add(force);
        console.log('crazy');
    }
}
