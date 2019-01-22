let init = false,
    reset = false,
    col = {
        0: {
            r: 30,
            g: 6,
            b: 12
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
            r: 155,
            g: 120,
            b: 120
        },
        4: {
            r: 222,
            g: 23,
            b: 120
        },
    },
    cLines = [],
    song,
    amp,
    vol;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    if (song.isLoaded()) { //Condition here
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    amp = new p5.Amplitude();
    for (let i = 0; i < 600; i++) {
        cLines[i] = new CrazyLine(random(width), random(height), random(60), (i + 1));
    }
    background(col[0].r, col[0].g, col[0].b);
}

function draw() {
    if (init) {
        vol = amp.getLevel();
        for (let i = 0; i < cLines.length; i++) {
            cLines[i].show(vol);
            cLines[i].boundry();
        }
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}


const initSketch = () => {
    init = true;
    song.play();
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
