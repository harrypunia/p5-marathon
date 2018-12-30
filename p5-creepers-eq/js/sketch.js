let creepersLeft = [],
    creepersTop = [],
    creepersRight = [],
    creepersBottom = [],
    col = {
        0: {
            r: 0,
            g: 0,
            b: 0
        },
        1: {
            r: 49,
            g: 73,
            b: 60
        },
        2: {
            r: 122,
            g: 158,
            b: 126
        },
        3: {
            r: 124,
            g: 53,
            b: 69
        },
        4: {
            r: 1,
            g: 23,
            b: 47
        },
    },
    population = 200,
    reset = false,
    init = false,
    cores = [],
    fft,
    amp,
    vol,
    freq;
var song;

function preload() {
    song = loadSound('/assets/wall.mp3');

}

function setup() {
    if (song.isLoaded()) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    noFill();
    fft = new p5.FFT(0, 256);
    amp = new p5.Amplitude();
    for (let i = 0; i < population / 4; i++) {
        creepersLeft[i] = new Creeper(0, random(0, height));
        creepersTop[i] = new Creeper(random(0, width), 0);
        creepersRight[i] = new Creeper(width, random(0, height));
        creepersBottom[i] = new Creeper(random(0, width), height);
    }
    for (let i = 0; i < 8; i++) {
        cores[i] = new Core((i + 1) * 25, i)
    }
    background(col[0].r, col[0].g, col[0].b);
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 10);
    freq = fft.analyze();
    vol = amp.getLevel();
    if (init) {
        for (let i in creepersLeft) {
            creepersLeft[i].show(freq[i]);
            creepersTop[i].show(freq[i]);
            creepersRight[i].show(freq[i]);
            creepersBottom[i].show(freq[i]);
        }
        for (let i in cores) {
            cores[i].show();
            cores[i].update(vol * ((i + 1) * 20));
        }
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const initSketch = () => {
    song.play();
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}

//Testing [Delete]
const say = m => console.log(m);
