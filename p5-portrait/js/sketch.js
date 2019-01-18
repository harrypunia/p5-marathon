let init = false,
    reset = false,
    col = {
        r: 150,
        g: 20,
        b: 50
    },
    img,
    lB1 = [],
    lB2 = [],
    lB3 = [],
    lB4 = [],
    rB1 = [],
    rB2 = [],
    rB3 = [],
    rB4 = [];

function preload() {
    img = loadImage('assets/main.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    smooth();
    if (0 == 0) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    pixelDensity(1);
    img.loadPixels();
    background(0)
    for (let i = 0; i < 50; i++) {
        lB1[i] = new Bullet(img.width / 4, img.height / 6);
        lB2[i] = new Bullet(img.width / 4, img.height / 3);
        lB3[i] = new Bullet(img.width / 4, img.height / 1.75);
        lB4[i] = new Bullet(img.width / 4, img.height / 1.25);
        rB1[i] = new Bullet(img.width / 1.5, img.height / 6);
        rB2[i] = new Bullet(img.width / 1.5, img.height / 3);
        rB3[i] = new Bullet(img.width / 1.5, img.height / 1.75);
        rB4[i] = new Bullet(img.width / 1.5, img.height / 1.25);
    }
}

function draw() {
    if (init) {
        applyMatrix();
        for (let i = 0; i < lB1.length; i++) {
            let chance = Math.floor(random(100)) == 0,
                lPi1 = (Math.floor(lB1[i].x) + Math.floor(lB1[i].y) * img.width) * 4,
                lPi2 = (Math.floor(lB2[i].x) + Math.floor(lB2[i].y) * img.width) * 4,
                lPi3 = (Math.floor(lB3[i].x) + Math.floor(lB3[i].y) * img.width) * 4,
                lPi4 = (Math.floor(lB4[i].x) + Math.floor(lB4[i].y) * img.width) * 4,
                rPi1 = (Math.floor(rB1[i].x) + Math.floor(rB1[i].y) * img.width) * 4,
                rPi2 = (Math.floor(rB2[i].x) + Math.floor(rB2[i].y) * img.width) * 4,
                rPi3 = (Math.floor(rB3[i].x) + Math.floor(rB3[i].y) * img.width) * 4,
                rPi4 = (Math.floor(rB4[i].x) + Math.floor(rB4[i].y) * img.width) * 4;

            bulletPhysics(lB1[i], 'left', lPi1);
            bulletPhysics(lB2[i], 'left', lPi2);
            bulletPhysics(lB3[i], 'left', lPi3);
            bulletPhysics(lB4[i], 'left', lPi4);
            bulletPhysics(rB1[i], 'right', rPi1);
            bulletPhysics(rB2[i], 'right', rPi2);
            bulletPhysics(rB3[i], 'right', rPi3);
            bulletPhysics(rB4[i], 'right', rPi4);

            shootBullet(lB1[i], 'left', chance, 2);
            shootBullet(lB2[i], 'left', chance, 2);
            shootBullet(lB3[i], 'left', chance, 2);
            shootBullet(lB4[i], 'left', chance, 2);
            shootBullet(rB1[i], 'right', chance, 2);
            shootBullet(rB2[i], 'right', chance, 2);
            shootBullet(rB3[i], 'right', chance, 2);
            shootBullet(rB4[i], 'right', chance, 2);
        }
        resetMatrix();
    }
}

const bulletPhysics = (arr, to, col) => {
    arr.update(img.pixels[col + 0], img.pixels[col + 1], img.pixels[col + 2]);
    arr.reset(to);
    arr.show();
}

const shootBullet = (arr, to, chance, speed) => {
    if (chance) {
        if (to == 'left') {
            arr.xInc = random(0, speed);
        } else {
            arr.xInc = random(0, -speed);
        }
        arr.yInc = random(-speed, speed);
        arr.shoot = true;
    }
}


const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
