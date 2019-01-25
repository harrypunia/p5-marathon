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
        this.angle;
    }
    show(vol, r, g, b, i) {
        this.r = this.storeR + vol;
        this.updateLine(i);
        stroke(r, g, b);
        noFill();
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        line(this.line.x - this.line.length, this.line.y, this.line.x + this.line.length, this.line.y);
        point(this.line.x + this.line.length, this.y);
        point(this.line.x - this.line.length, this.y);
        point(this.x - this.line.length, this.line.y);
        point(this.x + this.line.length, this.line.y);
        point(this.line.x + this.line.length, this.y);
        point(this.line.x - this.line.length, this.y);

        point(this.x, this.line.y - this.line.length);
        point(this.x, this.line.y) + this.line.length;
        point(this.line.x, this.y + this.line.length);
        point(this.line.x, this.y - this.line.length);
        point(this.x, this.line.y - this.line.length);
        point(this.x, this.line.y + this.line.length);
        pop();
    }
    updateLine(i) {
        this.line.angle += 0.01;
        this.x = this.r * Math.sin(this.line.angle) + (width / 2);
        this.y = this.r * Math.cos(this.line.angle) + (height / 2);
        let pos = this.x + this.y;
        this.angle = map(mouseX, 0, width, 0, 3.14) + this.line.angle;
    }
}
