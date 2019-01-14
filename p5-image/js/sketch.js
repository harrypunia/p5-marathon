let init = false,
    reset = false,
    img,
    fft,
    amp,
    freq,
    vol,
    song;

function preload() {
    img = loadImage('assets/madara.jpg');
    song = loadSound('../assets/madara.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    pixelDensity(1);
    if (song.isLoaded()) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    amp = new p5.Amplitude();
    fft = new p5.FFT(0, 256);
    img.loadPixels();
    loadPixels();
}

function draw() {
    if (init) {
        vol = amp.getLevel();
        freq = fft.analyze();
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                var pixi,
                    cani = (x + y * width) * 4,
                    str = Math.ceil(map((vol * 4), 0, 2.5, 0, 2));
                if (vol < .4) {
                    pixi = (x + y * img.width) * 4;
                } else {
                    pixi = (img.width - x + y * img.width) * 4;
                }
                pixels[cani + 0] = img.pixels[pixi + str];
                pixels[cani + 1] = img.pixels[pixi] / 10;
                pixels[cani + 2] = img.pixels[pixi] / 10;
                pixels[cani + 3] = vol * 400;
            }
        }
    }
    updatePixels();
}

const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
    song.play();
}
