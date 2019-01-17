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
    img;


function setup() {
    createCanvas(900 , 628);
    if (0 == 0) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    pixelDensity(1);
    img = loadImage('assets/main.jpg');
    img.loadPixels();
    loadPixels();
}

function draw() {
    if (init) {
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                var pixi = (x + (y * img.width)) * 4,
                    cani = (x + (y * width)) * 4;
                pixels[cani + 0] = img.pixels[pixi + 0];
                pixels[cani + 1] = img.pixels[pixi + 1];
                pixels[cani + 2] = img.pixels[pixi + 2];
                pixels[cani + 3] = img.pixels[pixi + 3];
            }
        }
    }
    updatePixels();
}


const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
