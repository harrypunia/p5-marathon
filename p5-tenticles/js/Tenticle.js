class Tenticle {
    constructor(n) {
        this.n = n
        this.angle = 0;
    }
    show(vol, rot) {
        applyMatrix();
        translate(width / 2, height / 2);
        rotate(rot);
        let mapVol = vol < .3 ? vol : .3;
        for (let i = 0; i < this.n; i++) {
            let posX = (i + (vol * 2)) * Math.sin(this.angle + (i / 10)),
                posY = i * 2,
                mapInc = map(i, 0, this.n, 0, 255);
            stroke(255 - (vol * 100), 255 - mapInc, 255 - mapInc, 255 - mapInc);
            point(posX, posY);
        }
        this.angle += mapVol;
        resetMatrix();
    }
}
