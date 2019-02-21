let init = false,
    song,
    rOff = 100,
    gOff = 1000,
    bOff = 10000,
    mp3,
    core;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    song.isLoaded() ? document.getElementById('play').classList.add('in') : 0;
    mp3 = new MP3();
    core = new Core(200);
}

function draw() {
    mp3.update();
    const {r, g, b} = updateColors();
    background(30, 10, 22);
    if (init) {
        core.draw(r, g, b);
    }
}

const updateColors = () => {
    rOff += 0.01;
    gOff += 0.01;
    bOff += 0.01;
    return {
        r: mapCol(rOff),
        g: mapCol(gOff),
        b: mapCol(bOff)
    }
}

const mapCol = noiseOff => map(noiseOff, 0, 1, 0, 255)

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}


const initSketch = () => {
    init = true;
    song.play();
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
