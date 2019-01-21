class Tenticle {
    constructor(n) {
        this.n = n
        this.angle = 0;
    }
    show(vol) {
        stroke(255);
        applyMatrix();
        translate(width / 2, height / 2);
        let mapVol = vol < .5 ? vol : .5;
        for (let i = 0; i < this.n; i++) {
            let posX = (i + 1) * Math.sin(this.angle + i),
                posY = i * 2;
            point(posX, posY);
        }
        this.angle += mapVol;
        resetMatrix();
    }
}
