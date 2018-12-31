let init = false,
    reset = false,
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
    fft,
    amp,
    freq,
    vol,
    song,
    crazyTriangle;

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
    crazyTriangle = new CrazyTriangle(100);
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 10);
    freq = fft.analyze();
    vol = amp.getLevel();
    if (init) {
        crazyTriangle.show();
        crazyTriangle.update(vol * 20);
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
