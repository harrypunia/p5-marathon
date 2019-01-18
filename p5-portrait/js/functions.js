const setParticles = (Obj, img, col) => {
    for (let i = 0; i < population; i++) {
        Obj.lB1[i] = new Bullet(0, img.height / 6, col);
        Obj.lB2[i] = new Bullet(0, img.height / 3, col);
        Obj.lB3[i] = new Bullet(0, img.height / 1.75, col);
        Obj.lB4[i] = new Bullet(0, img.height / 1.25, col);
        Obj.rB1[i] = new Bullet(width / 4, img.height / 6, col);
        Obj.rB2[i] = new Bullet(width / 4, img.height / 3, col);
        Obj.rB3[i] = new Bullet(width / 4, img.height / 1.75, col);
        Obj.rB4[i] = new Bullet(width / 4, img.height / 1.25, col);
    }
}

const drawImage = (arr, img, speed) => {
    for (let i = 0; i < population; i++) {
        let chance = Math.floor(random(100)) == 0,
            lPi1 = (Math.floor(arr.lB1[i].x) + Math.floor(arr.lB1[i].y) * img.width) * 4,
            lPi2 = (Math.floor(arr.lB2[i].x) + Math.floor(arr.lB2[i].y) * img.width) * 4,
            lPi3 = (Math.floor(arr.lB3[i].x) + Math.floor(arr.lB3[i].y) * img.width) * 4,
            lPi4 = (Math.floor(arr.lB4[i].x) + Math.floor(arr.lB4[i].y) * img.width) * 4,
            rPi1 = (Math.floor(arr.rB1[i].x) + Math.floor(arr.rB1[i].y) * img.width) * 4,
            rPi2 = (Math.floor(arr.rB2[i].x) + Math.floor(arr.rB2[i].y) * img.width) * 4,
            rPi3 = (Math.floor(arr.rB3[i].x) + Math.floor(arr.rB3[i].y) * img.width) * 4,
            rPi4 = (Math.floor(arr.rB4[i].x) + Math.floor(arr.rB4[i].y) * img.width) * 4;

        bulletPhysics(arr.lB1[i], 'left', lPi1, img);
        bulletPhysics(arr.lB2[i], 'left', lPi2, img);
        bulletPhysics(arr.lB3[i], 'left', lPi3, img);
        bulletPhysics(arr.lB4[i], 'left', lPi4, img);
        bulletPhysics(arr.rB1[i], 'right', rPi1, img);
        bulletPhysics(arr.rB2[i], 'right', rPi2, img);
        bulletPhysics(arr.rB3[i], 'right', rPi3, img);
        bulletPhysics(arr.rB4[i], 'right', rPi4, img);

        shootBullet(arr.lB1[i], 'left', chance, speed);
        shootBullet(arr.lB2[i], 'left', chance, speed);
        shootBullet(arr.lB3[i], 'left', chance, speed);
        shootBullet(arr.lB4[i], 'left', chance, speed);
        shootBullet(arr.rB1[i], 'right', chance, speed);
        shootBullet(arr.rB2[i], 'right', chance, speed);
        shootBullet(arr.rB3[i], 'right', chance, speed);
        shootBullet(arr.rB4[i], 'right', chance, speed);
    }
}


const bulletPhysics = (arr, to, col, img) => {
    arr.update(img.pixels[col + 0], img.pixels[col + 1], img.pixels[col + 2]);
    arr.reset(to, img);
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
