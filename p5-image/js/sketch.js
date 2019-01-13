let init = false,
    reset = false,
    img,
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
    };

function preload() {
    img = loadImage('assets/madara.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    pixelDensity(1);
    if (0 == 0) { //Condition here
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    background(col[0].r, col[0].g, col[0].b);
    img.loadPixels();
    loadPixels();
}

function draw() {
    if (init) {
        //        image(img, width, height, width, height);
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                let pixi = (x + y * img.width) * 4,
                    cani = (y * width + x) * 4;
                if (0 == Math.floor(random(10))) {
                    pixels[cani + 0] = img.pixels[pixi]
                    pixels[cani + 1] = 0;
                    pixels[cani + 2] = img.pixels[pixi + 2]
                    pixels[cani + 3] = img.pixels[pixi + 3]
                } else {
                    pixels[cani + 0] = 30;
                    pixels[cani + 1] = 10;
                    pixels[cani + 2] = 22;
                    pixels[cani + 3] = 255;
                }
            }
        }
        updatePixels();
    }
}

const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
