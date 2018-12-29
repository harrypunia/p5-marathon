let col = {
        4: {
            r: 0,
            g: 26,
            b: 35
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
        0: {
            r: 49,
            g: 73,
            b: 60
        }
    },
    song,
    fft,
    spectrum,
    particles = [],
    spirals = [],
    init = false,
    resetBackground = false;

function preload() {
    song = loadSound('../assets/hell.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    fft = new p5.FFT();
    for (let i = 0; i < 80; i++) {
        particles[i] = new Particle;
    }
    for (let i = 0; i < 6; i++) {
        spirals[i] = new Spiral(i * 100, i * 40, i / 1000, i); //(radius, number, freq, dir);
        spirals[i].defineShape();
    }
}

function draw() {
    background(col[4].r, col[4].g, col[4].b);
    spectrum = fft.analyze();
    if (init) {
        for (let i in particles) {
            particles[i].show();
            particles[i].update();
        }
        for (let i in spirals) {
            spirals[i].show();
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
