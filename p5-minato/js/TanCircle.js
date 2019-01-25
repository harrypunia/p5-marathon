class TanCircle {
    constructor(r) {
        this.x;
        this.y;
        this.storeR = r;
        this.r = r;
        this.line = {
            x: 0,
            y: 0,
            angle: random(10),
            length: 40,
            rot: 0
        };
    }
    show(vol) {
        this.r = this.storeR + vol;
        this.updateLine();
        stroke(255);
        noFill();
        push();
        translate(this.x, this.y);
        rotate(3.14);
        strokeWeight(1);
        line(this.line.x - this.line.length, this.line.y, this.line.x + this.line.length, this.line.y);
        strokeWeight(4);
        point(this.x1, this.y1);
        point(this.x2, this.y2);
        pop();
    }
    updateLine() {
        this.line.angle += 0.005;
        this.x = this.r * Math.sin(this.line.angle) + (width / 2);
        this.y = this.r * Math.cos(this.line.angle) + (height / 2);
        let pos = this.x + this.y;
        this.line.rot = map()
    }
}
