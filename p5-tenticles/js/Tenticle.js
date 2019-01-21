class Tenticle {
    constructor(n) {
        this.n = n
        this.angle = 0;
    }
    show(vol) {
        console.log(vol);
        stroke(255);
        applyMatrix();
        translate(width / 2, height / 2);
        for (let i = 0; i < this.n; i++) {
            let posX = (i + 1) * Math.sin(this.angle + (i * 5)),
                posY = i * 2;
            point(posX, posY);
        }
        this.angle += 0.05;
        resetMatrix();
    }
}
