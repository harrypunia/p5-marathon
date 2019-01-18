let init = false,
    reset = false,
    col = {
        r: 150,
        g: 20,
        b: 50
    },
    img,
    population = 50;

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
    
    img1Particles();
    img2Particles();
    img3Particles();
    img4Particles();
}

function draw() {
    if (init) {
        applyMatrix();
        for (let i = 0; i < population; i++) {
    
        }
        resetMatrix();
    }
}


const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
