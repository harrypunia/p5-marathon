let sketch, song, mp3, init = false, cRotate;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    document.getElementById('play').classList.add('in');
    mp3 = new MP3(song);
    cRotate = new easyRotate(width/2, height/2, 40, .01);
}

function draw() {
    mp3.update();
    background(30, 10, 22);
    if(init) {
        noFillStroke(255);
        circle(cRotate.update().x, cRotate.update().y, 50 + 100 * mp3.smoothVol);
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