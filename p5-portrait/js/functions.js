let _img1_ = {
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
    };

const img1Particles = () => {
    for (let i = 0; i < population; i++) {
        _img1_.lB1[i] = new Bullet(img.width / 4, img.height / 6);
        _img1_.lB2[i] = new Bullet(img.width / 4, img.height / 3);
        _img1_.lB3[i] = new Bullet(img.width / 4, img.height / 1.75);
        _img1_.lB4[i] = new Bullet(img.width / 4, img.height / 1.25);
        _img1_.rB1[i] = new Bullet(img.width / 1.5, img.height / 6);
        _img1_.rB2[i] = new Bullet(img.width / 1.5, img.height / 3);
        _img1_.rB3[i] = new Bullet(img.width / 1.5, img.height / 1.75);
        _img1_.rB4[i] = new Bullet(img.width / 1.5, img.height / 1.25);
    }
}
const img2Particles = () => {
    for (let i = 0; i < population; i++) {
        _img2_.lB1[i] = new Bullet(img.width / 4, img.height / 6);
        _img2_.lB2[i] = new Bullet(img.width / 4, img.height / 3);
        _img2_.lB3[i] = new Bullet(img.width / 4, img.height / 1.75);
        _img2_.lB4[i] = new Bullet(img.width / 4, img.height / 1.25);
        _img2_.rB1[i] = new Bullet(img.width / 1.5, img.height / 6);
        _img2_.rB2[i] = new Bullet(img.width / 1.5, img.height / 3);
        _img2_.rB3[i] = new Bullet(img.width / 1.5, img.height / 1.75);
        _img2_.rB4[i] = new Bullet(img.width / 1.5, img.height / 1.25);
    }
}
const img3Particles = () => {
    for (let i = 0; i < population; i++) {
        _img3_.lB1[i] = new Bullet(img.width / 4, img.height / 6);
        _img3_.lB2[i] = new Bullet(img.width / 4, img.height / 3);
        _img3_.lB3[i] = new Bullet(img.width / 4, img.height / 1.75);
        _img3_.lB4[i] = new Bullet(img.width / 4, img.height / 1.25);
        _img3_.rB1[i] = new Bullet(img.width / 1.5, img.height / 6);
        _img3_.rB2[i] = new Bullet(img.width / 1.5, img.height / 3);
        _img3_.rB3[i] = new Bullet(img.width / 1.5, img.height / 1.75);
        _img3_.rB4[i] = new Bullet(img.width / 1.5, img.height / 1.25);
    }
}
const img4Particles = () => {
    for (let i = 0; i < population; i++) {
        _img4_.lB1[i] = new Bullet(img.width / 4, img.height / 6);
        _img4_.lB2[i] = new Bullet(img.width / 4, img.height / 3);
        _img4_.lB3[i] = new Bullet(img.width / 4, img.height / 1.75);
        _img4_.lB4[i] = new Bullet(img.width / 4, img.height / 1.25);
        _img4_.rB1[i] = new Bullet(img.width / 1.5, img.height / 6);
        _img4_.rB2[i] = new Bullet(img.width / 1.5, img.height / 3);
        _img4_.rB3[i] = new Bullet(img.width / 1.5, img.height / 1.75);
        _img4_.rB4[i] = new Bullet(img.width / 1.5, img.height / 1.25);
    }
}

const drawImage = () => {
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
