let col = {
        0: {
            r: 49,
            g: 73,
            b: 60
        },
        1: {
            r: 122,
            g: 158,
            b: 126
        },
        2: {
            r: 124,
            g: 53,
            b: 69
        },
        3: {
            r: 1,
            g: 23,
            b: 47
        },
        4: {
            r: 0,
            g: 26,
            b: 35
        }
    },
    song,
    fft,
    spectrum,
    particles = [],
    spirals = [],
    init = false,
    timer = 0,
    resetBackground = false;

function preload() {
    song = loadSound('p5-spiral-eq/assets/hell.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    fft = new p5.FFT();
    for (let i = 0; i < 120; i++) {
        particles[i] = new Particle(2000);
    }
    for (let i = 0; i < 5; i++) {
        spirals[i] = new Spiral((i + 1) * 60 + (i * 30), (i + 1) * 30, (i + 1) / 1000, i, (i + 2) * 150); //(radius, number, freq, dir, sensitvity);
        spirals[i].defineShape();
    }
}

function draw() {
    background(col[4].r, col[4].g, col[4].b);
    spectrum = fft.analyze();
    if (init) {
        for (let i in particles) {
            particles[i].show();
            particles[i].update(spectrum[i]);
        }
        for (let i in spirals) {
            spirals[i].show(spectrum);
        }
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const startSketch = () => {
    song.play();
    init = true;
    let play = document.getElementsByClassName('play')[0];
    play.style.display = 'none';
}

//Testing [DELETE]
const say = msg => console.log(msg);
