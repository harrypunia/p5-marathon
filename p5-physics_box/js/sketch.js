let init = false,
    song,
    rOff = 100,
    gOff = 1000,
    bOff = 10000,
    mp3,
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
    mp3 = new MP3();
}

function draw() {
    mp3.update();
    const {r, g, b} = updateColors();
    background(30, 10, 22);
    if (init) {
        fill(255 - r, 255 - g, 255 - b);
        ellipse(width/2, height/2, mp3.smoothVol * 1000, mp3.smoothVol * 1000);
    }
}

const updateColors = () => {
    rOff += 0.001;
    gOff += 0.001;
    bOff += 0.001;
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
