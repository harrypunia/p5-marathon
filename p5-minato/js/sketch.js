let init = false,
    reset = false,
    col = {
        0: {
            r: 30,
            g: 10,
            b: 22
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
    song,
    amp,
    vol,
    tanCircles = [],
    rOff = 0,
    gOff = 1000,
    bOff = 1000000,
    colR,
    colG,
    colB;

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
    for (let i = 0; i < 100; i++) {
        tanCircles[i] = new TanCircle(200);
    }
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 90);

    if (init) {
        rOff++
        gOff++
        bOff++
        colR = map(noise(rOff), 0, 1, 0, 100);
        colG = map(noise(gOff), 0, 1, 0, 100);
        colB = map(noise(bOff), 0, 1, 0, 100);
        fill(0);
        vol = amp.getLevel();
        for (let i = 0; i < tanCircles.length; i++) {
            tanCircles[i].show(vol * 100, colR, colG, colB);
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
