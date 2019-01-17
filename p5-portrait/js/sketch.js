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
    img,
    leftBullets = []

function preload() {
    img = loadImage('assets/main.jpg');
}

function setup() {
    createCanvas(900, 628);
    if (0 == 0) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    pixelDensity(1);
    img.loadPixels();
    loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            var pixi = (x + y * width) * 4;
            pixels[pixi + 0] = 227;
            pixels[pixi + 1] = 164;
            pixels[pixi + 2] = 101;
            pixels[pixi + 3] = 255;
        }
    }
    updatePixels();
    for (let i = 0; i < 200; i++) {
        leftBullets[i] = new Bullet(0, height / 2);
    }
}

function draw() {
    if (init) {
        for (let i = 0; i < leftBullets.length; i++) {
            let chance = Math.floor(random(100)),
                cani = (Math.floor(leftBullets[i].x) + Math.floor(leftBullets[i].y) * width) * 4;
            leftBullets[i].show();
            leftBullets[i].update(img.pixels[cani + 0], img.pixels[cani + 1], img.pixels[cani + 2]);
            leftBullets[i].reset();
            if (chance == 0 && leftBullets[i].shoot == false) {
                leftBullets[i].xInc = random(0, 1);
                leftBullets[i].yInc = random(-1, 1);
                leftBullets[i].shoot = true;
            }
        }
    }
}


const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
