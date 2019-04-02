let sketch, song, mp3, init = false, cRotate, eNoise;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    document.getElementById('play').classList.add('in');
    mp3 = new easyMP3(song);
    cRotate = new easyRotate(width/2, height/2, 40, .01);
    eNoise = new easyNoise(0);
}

function draw() {
    background(30, 10, 22);
    if(init) {
        noFillStroke(255);
        star(width/2, height/2, 20, 7);
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const initSketch = () => {
    song.play();
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}