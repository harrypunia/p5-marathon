let init = false,
    reset = false,
    col = {
        0: {
            r: 50,
            g: 10,
            b: 38
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
    song,
    amp,
    rain = [],
    rainIntensity = 10,
    vol;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    if (song.isLoaded()) { //Condition here
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    amp = new p5.Amplitude();
    for (let i = 0; i < rainIntensity; i++) {
        rain[i] = new Rain((width / rainIntensity) * (i + 1) - width / 2, -height / 2, 100);
    }
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 50);
    let circle = {
        size: 40,
        reponsive: 100
    }

    if (init) {
        vol = amp.getLevel();
        //-------------------
        push();
        translate(width / 2, height / 2);
        //
        for (let i = 0; i < rainIntensity; i++) {
            rain[i].show();
            rain[i].fall();
        }
        //
        fill(0);
        ellipse(0, 0, circle.size + (vol * circle.reponsive), circle.size + (vol * circle.reponsive));
        //
        if (vol > 0.5) {
            fill(80, 5, 70, 150);
            ellipse(0, 0, 20 + (vol * 10), 20 + (vol * 10));
        } else {}
        //
        pop();
        //-------------------
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}


const initSketch = () => {
    init = true;
    song.play();
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
