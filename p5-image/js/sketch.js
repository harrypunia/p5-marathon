let init = false,
    reset = false,
    img,
    fft,
    amp,
    freq,
    vol,
    song,
    xoff = 0,
    yoff = 1000;

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
    fft = new p5.FFT();
    amp = new p5.Amplitude();
    img.loadPixels();
    loadPixels();
}

function draw() {
    if (init) {
        freq = fft.analyze();
        vol = amp.getLevel();
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                var pixi,
                    cani = (x + y * width) * 4,
                    str = Math.ceil(map((vol * 4), 0, 2, 0, 2));
                if (vol < .4) {
                    pixi = (x + y * img.width) * 4;
                } else {
                    pixi = (img.width - x + y * img.width) * 4;
                }
                pixels[cani + 0] = img.pixels[pixi + str] / 2;
                pixels[cani + 1] = img.pixels[pixi + str] / 100;
                pixels[cani + 2] = img.pixels[pixi + str] / 100;
                pixels[cani + 3] = 255;
            }
            xoff += 0.01;
        }
        yoff += 0.01;
        console.log(frameRate());
    }
    updatePixels();
}

const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
    song.play();
}
