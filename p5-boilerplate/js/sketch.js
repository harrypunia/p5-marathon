let init = false,
    song,
    mp3,
    core;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    song.isLoaded() ? document.getElementById('play').classList.add('in') : 0;
    mp3 = new MP3();
}

function draw() {
    mp3.update();
    background(30, 10, 22);
    ellipse(width/2, height/2, 50 + 200 * mp3.smoothVol, 50 + 200 * mp3.smoothVol);
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
