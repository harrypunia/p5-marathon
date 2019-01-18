let init = false,
    reset = false,
    col = {
        0: {
            r: 150,
            g: 20,
            b: 50
        },
        1: {
            r: 39,
            g: 31,
            b: 48
        },
        2: {
            r: 3,
            g: 76,
            b: 60
        },
        3: {
            r: 129,
            g: 83,
            b: 85
        },
        4: {
            r: 46,
            g: 45,
            b: 77
        },
        5: {
            r: 189,
            g: 139,
            b: 156
        },
        6: {
            r: 52,
            g: 84,
            b: 209
        },
        7: {
            r: 147,
            g: 75,
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
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    _img2_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    _img3_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    _img4_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    img1,
    img2,
    img3,
    img4,
    speed = 2,
    population = 50,
    images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    img1Num = Math.floor(Math.random() * 10),
    img2Num = Math.floor(Math.random() * 9),
    img3Num = Math.floor(Math.random() * 8),
    img4Num = Math.floor(Math.random() * 7);

function preload() {
    let imgSRC;

    imgSRC = images[img1Num];
    img1 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img1Num, 1);
    imgSRC = images[img2Num];
    img2 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img2Num, 1);
    imgSRC = images[img3Num];
    img3 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img3Num, 1);
    imgSRC = images[img4Num];
    img4 = loadImage('assets/main' + imgSRC + '.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    smooth();
    img1.resize(width / 3, 0);
    img2.resize(width / 3, 0);
    img3.resize(width / 3, 0);
    img4.resize(width / 3, 0);
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

    setParticles(_img1_, img1, _img1_.col);
    setParticles(_img2_, img2, _img2_.col);
    setParticles(_img3_, img3, _img3_.col);
    setParticles(_img4_, img4, _img4_.col);
    console.log(_img1_.col, _img2_.col, _img3_.col, _img4_.col)
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
