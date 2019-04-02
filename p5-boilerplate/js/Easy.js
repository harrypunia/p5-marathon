class easyRotate {
    constructor(x, y, radius, speed) {
        this.center = { x: x, y: y }
        this.r = radius;
        this.s = speed;
        this.a = 0;
    }
    update() {
        this.a += this.s;
        return {
            x: this.r * Math.sin(this.a) + this.center.x,
            y: this.r * Math.cos(this.a) + this.center.y
        }
    }
}

class MP3 {
    constructor(song) {
        this.song = song;
        this.amp = new p5.Amplitude();
        this.smoothVol = 0.0;
    }
    update(smoothness = 0.05) {
        this.vol = this.amp.getLevel();
        this.smoothVol = lerp(this.smoothVol, this.vol, smoothness);
    }
}

//easyFunctions
const circle = (x, y, r) => ellipse(x, y, r, r);

const noFillStroke = (r, g, b, a) => {
    g == undefined ? g = r : 0;
    b == undefined ? b = r : 0;
    a == undefined ? a = 255 : 0;
    noFill();
    stroke(r, g, b, a);
}

const noStrokeFill = (r, g, b, a) => {
    g == undefined ? g = r : 0;
    b == undefined ? b = r : 0;
    a == undefined ? a = 255 : 0;
    noStroke();
    fill(r, g, b, a);
}