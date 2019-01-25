class TanCircle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.offset = random(1);
        this.storeR = r;
        this.r = r;
        this.line = {
            x: 0,
            y: 0,
            x1: 0,
            y2: 0,
            x2: 0,
            y2: 0,
            angle: random(10),
            length: 40,
            rot: {
                x: 0,
                y: 0
            }
        };
    }
    show(vol) {
        this.r = this.storeR + vol;
        this.updateLine();
        stroke(255);
        noFill();
        push();
        translate(this.line.x, this.line.y);
        strokeWeight(1);
        line(this.x1, this.y1, this.x2, this.y2);
        strokeWeight(4);
        point(this.x1, this.y1);
        point(this.x2, this.y2);
        pop();
    }
    updateLine() {
        this.line.angle += 0.005;
        this.line.x = this.r * Math.sin(this.line.angle);
        this.line.y = this.r * Math.cos(this.line.angle);
        let _rotX = map(this.line.x, -this.r, this.r, 0, this.line.length * 2),
            _rotY = map(this.line.y, -this.r, this.r, 0, this.line.length * 2);
    }
}
