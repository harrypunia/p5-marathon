let init = false,
    reset = false,
    col = {
        0: {
            r: 150,
            g: 20,
            b: 50
        },
        1: {
            r: 150,
            g: 20,
            b: 50
        },
        2: {
            r: 10,
            g: 10,
            b: 0
        },
        3: {
            r: 10,
            g: 10,
            b: 0
        },
        4: {
            r: 10,
            g: 10,
            b: 0
        },
        5: {
            r: 10,
            g: 10,
            b: 0
        },
        6: {
            r: 10,
            g: 10,
            b: 0
        },
        7: {
            r: 10,
            g: 10,
            b: 0
        }
    },
    _img1_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: []
    },
    _img2_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: []
    },
    _img3_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: []
    },
    _img4_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: []
    },
    img1,
    img2,
    img3,
    img4,
    speed = 2;
population = 50;

function preload() {
    img1 = loadImage('assets/main' + Math.floor(random(11)) + '.jpg');
    img2 = loadImage('assets/main' + Math.floor(random(11)) + '.jpg');
    img3 = loadImage('assets/main' + Math.floor(random(11)) + '.jpg');
    img4 = loadImage('assets/main' + Math.floor(random(11)) + '.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    smooth();
    img1.resize(width / 4, 0);
    img2.resize(width / 4, 0);
    img3.resize(width / 4, 0);
    img4.resize(width / 4, 0);
    if (0 == 0) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    pixelDensity(1);
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels();

    background(0)

    setParticles(_img1_, img1);
    setParticles(_img2_, img2);
    setParticles(_img3_, img3);
    setParticles(_img4_, img4);
}

function draw() {
    if (init) {
        applyMatrix();
        translate(0, height / 2 - img1.height / 2);
        drawImage(_img1_, img1, speed);
        resetMatrix();
        translate(width / 4, height / 2 - img2.height / 2);
        drawImage(_img2_, img2, speed);
        resetMatrix();
        translate(width / 2, height / 2 - img3.height / 2);
        drawImage(_img3_, img3, speed);
        resetMatrix();
        translate(width * .75, height / 2 - img4.height / 2);
        drawImage(_img4_, img4, speed);
        resetMatrix();
    }
}


const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
