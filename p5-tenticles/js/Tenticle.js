class Tenticle {
    constructor(n) {
        this.n = n
        this.angle = 0;
    }
    show(vol) {
        applyMatrix();
        translate(width / 2, height / 2);
        for (let i = 0; i < this.n; i++) {
            stroke(255);
            let posX = (i + 1) * Math.sin(this.angle + (i * 5)),
                posY = i * 2;
            point(posX, posY);
        }
        this.angle += vol;
        resetMatrix();
    }
}
