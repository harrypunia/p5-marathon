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
    //    pixelDensity(1);
    if (song.isLoaded()) { //Condition here
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    fft = new p5.FFT();
    amp = new p5.Amplitude();
    img.loadPixels();
    //loadPixels();
}

function draw() {
    background(10, 10, 10);
    if (init) {
        freq = fft.analyze();
        vol = amp.getLevel();
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let pixi = (x + y * img.width) * 4;
                if (x % 15 == 0 && y % 15 == 0) {
                    let str = map(noise(xoff, yoff), 0, 1, 0, 20);
                    noFill();
                    stroke(img.pixels[pixi + 0] + (vol * 20), img.pixels[pixi + 1], img.pixels[pixi + 2], 255);
                    strokeWeight(Math.floor(str));
                    point(x, y);
                }
                xoff += (vol / 100);
            }
            yoff += (vol / 100);
        }
    }
}

const initSketch = () => {
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
    song.play();
}
