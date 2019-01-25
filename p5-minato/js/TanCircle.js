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
            length: 200,
            rot: 0
        };
    }
    show(vol, r, g, b) {
        this.r = this.storeR + vol;
        this.updateLine();
        stroke(r, g, b);
        noFill();
        push();
        translate(this.x, this.y);
        rotate(this.line.angle);
        strokeWeight(1);
        line(this.line.x - this.line.length, this.line.y, this.line.x + this.line.length, this.line.y);
        strokeWeight(4);
        point(this.line.x + this.line.length, this.y);
        point(this.line.x - this.line.length, this.y);
        pop();
    }
    updateLine() {
        this.line.angle += 0.005;
        this.x = this.r * Math.sin(this.line.angle) + (width / 2);
        this.y = this.r * Math.cos(this.line.angle) + (height / 2);
        let pos = this.x + this.y;
        this.line.rot = map(pos, -(this.r + width / 2) * 2, (this.r + width / 2) * 2, 0, 3.14);
    }
}
