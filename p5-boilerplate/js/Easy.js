class easyRotate {
    constructor(x, y, radius, speed) {
        this.center = { x: x, y: y }
        this.r = radius;
        this.s = speed;
        this.a = 0;
    }
    update() {
        this.a += this.s;
        this.x = this.r * Math.sin(this.a) + this.center.x;
        this.y = this.r * Math.cos(this.a) + this.center.y;
    }
}

class easyMP3 {
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

class easyNoise {
    constructor(x, min, max) {
        this.x = x; 
        this.min = min;
        this.max = max;
        this.noiseVal = noise(this.x);
    }
    update(speed) {
        this.x += speed;
        this.val = map(this.x, 0, 1, this.min, this.max);
    }
}

//easyFunctions
const circle = (x, y, r) => ellipse(x, y, r, r);

const triangle = (x, y, s) => {
    const dX= 0.86602540378 * s;
    const dY= 0.5 * s;
    beginShape();
        vertex(x+0, y -s);
        vertex(x+dX, y+dY);
        vertex(x-dX, y+dY);
    endShape(CLOSE);
}

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

const star = (x, y, r, n) => {
    if (n>=3) {
        noStrokeFill(200);
        const h = n < 8 ? PI*r/n +1 : PI*r/n;
        for(let i = 0; i < n; i++) {
            applyMatrix();
            translate(x, y);
            rotate(i/n * TWO_PI);
            beginShape();
                vertex(-h, -r);
                vertex(0, -r-h);
                vertex(h, -r);
            endShape();
            resetMatrix();
        }
    } else {
        console.error("paramenter 'n' has to be a greater value than 2");
    }
}