let init = false,
    reset = false,
    col = {
        0: {
            r: 150,
            g: 20,
            b: 50
        },
        1: {
            r: 81,
            g: 43,
            b: 71
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
            r: 73,
            g: 71,
            b: 91
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
    population = 100,
    particlePop = 25,
    images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    messages = ['Fear', 'Misbelief', 'Gender?', 'Offensive', 'Pick-pocketer', 'Predator', 'Gross', 'Drugs', 'Unseen', 'Affair'],
    img1Num = Math.floor(Math.random() * 10),
    img2Num = Math.floor(Math.random() * 9),
    img3Num = Math.floor(Math.random() * 8),
    img4Num = Math.floor(Math.random() * 7),
    BLParticles = [],
    TLParticles = [],
    TRParticles = [],
    BRParticles = [],
    song,
    amp,
    vol,
    cnv;

function preload() {
    let imgSRC;

    imgSRC = images[img1Num];
    r1.innerHTML = messages[img1Num];
    img1 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img1Num, 1);
    messages.splice(img1Num, 1);

    imgSRC = images[img2Num];
    r2.innerHTML = messages[img2Num];
    img2 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img2Num, 1);
    messages.splice(img2Num, 1);

    imgSRC = images[img3Num];
    r3.innerHTML = messages[img3Num];
    img3 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img3Num, 1);
    messages.splice(img3Num, 1);

    imgSRC = images[img4Num];
    r4.innerHTML = messages[img4Num];
    img4 = loadImage('assets/main' + imgSRC + '.jpg');

}

function setup() {
    cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent('container');
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

    for (let i = 0; i < particlePop; i++) {
        BLParticles = [i] = new Particle(height, 0, 1);
        TLParticles = [i] = new Particle(0, 0, 1);
        TRParticles = [i] = new Particle(width, 0, 1);
        BRParticles = [i] = new Particle(width, height, 1);
    }
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

        for (let i = 0; i < particlePop; i++) {
            BLParticles.show();
            BLParticles.update(vol);

            TLParticles.show();
            TLParticles.update(vol);

            TRParticles.show();
            TRParticles.update(vol);

            BRParticles.show();
            BRParticles.update(vol);
        }
    }
}

const initSketch = () => {
    init = true;
    let btn = document.getElementById('play'),
        races = document.getElementsByClassName('races-all')[0];
    btn.style.display = 'none';
    races.style.display = 'flex';
}
