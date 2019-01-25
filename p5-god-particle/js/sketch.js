let init = false,
    col = {
        0: {
            r: 30,
            g: 10,
            b: 22
        }
    },
    song,
    amp,
    vol,
    GPs = [],
    rOff = 100,
    gOff = 1000,
    bOff = 10000,
    r, g, b;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    if (song.isLoaded()) { //Condition here
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    amp = new p5.Amplitude();
    for (let i = 0; i < 100; i++) {
        GPs[i] = new GodParticle();
    }
}

function draw() {
    vol = amp.getLevel();
    rOff += 0.001;
    gOff += 0.001;
    bOff += 0.001;
    r = map(noise(rOff), 0, 1, 0, 255);
    g = map(noise(gOff), 0, 1, 0, 255);
    b = map(noise(bOff), 0, 1, 0, 255);
    background(b - 100, r - 100, g - 100);
    if (init) {
        fill(0);
        push();
        translate(width / 2, height / 2);
        for (let i = 0; i < GPs.length; i++) {
            GPs[i].show(vol, r, g, b);
            GPs[i].move();
            GPs[i].connectCorner(i, r, g, b);
            for (let j = 0; j < GPs.length; j++) {
                if (i != j && i - j < 4 && i - j > -4) {
                    GPs[i].connect(GPs[j], r, g, b);
                }
            }
        }
        pop();
    }
    console.log(frameRate());
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}


const initSketch = () => {
    init = true;
    song.play();
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
