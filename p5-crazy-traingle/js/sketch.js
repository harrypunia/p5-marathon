let init = false,
    reset = false,
    col = {
        0: {
            r: 0,
            g: 0,
            b: 0
        },
        1: {
            r: 250,
            g: 73,
            b: 60
        },
        2: {
            r: 82,
            g: 10,
            b: 20
        },
        3: {
            r: 255,
            g: 220,
            b: 220
        },
        4: {
            r: 222,
            g: 23,
            b: 120
        },
    },
    fft,
    amp,
    freq,
    vol,
    song,
    crazyTriangles = [];

function preload() {
    song = loadSound('../assets/wall.mp3');
}

function setup() {
    if (song.isLoaded()) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    background(col[0].r, col[0].g, col[0].b);
    fft = new p5.FFT(0, 256);
    amp = new p5.Amplitude();
    for (let i = 0; i < 100; i++) {
        crazyTriangles[i] = new CrazyTriangle(((i + 2) * 30), i);
    }
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 90);
    freq = fft.analyze();
    vol = amp.getLevel();
    if (init) {
        for (let i in crazyTriangles) {
            crazyTriangles[i].show();
            crazyTriangles[i].update((vol * 40) + (freq[254 - i] / 50));
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
