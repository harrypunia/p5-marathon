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
    circle = {
        size: 400,
        reponsive: 500,
    },
    song,
    amp,
    rain = [],
    rainIntensity = 50,
    vol,
    test = 0;

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
        rain[i] = new Rain((width / rainIntensity) * (i + 1) - width / 2, random(-height / 2, -height), random(10, 100));
        rain[i].preload();
    }
}

function mousePressed() {
    circle.size = 700
}

function mouseReleased() {
    circle.size = 400;
}

function draw() {
    test++;
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 50);
    circle.x = map(mouseX, 0, width, -20, 20);
    circle.y = map(mouseY, 0, height, -20, 20);

    if (init) {
        vol = amp.getLevel();
        //-------------------
        push();
        translate(width / 2, height / 2);
        //
        if (vol > 0.5) {
            stroke(255);
        } else {
            noStroke();
        }
        //
        fill(0);
        ellipse(circle.x, circle.y, circle.size + (vol * circle.reponsive), circle.size + (vol * circle.reponsive));
        if (vol > 0.5) {
            fill(80, 5, 70, 100);
            noStroke();
            ellipse(circle.x, circle.y, circle.size / 2, circle.size / 2);
            ellipse(circle.x, circle.y, circle.size / 4, circle.size / 4);
            ellipse(circle.x, circle.y, circle.size / 8, circle.size / 8);
        }
        //
        for (let i = 0; i < rainIntensity; i++) {
            rain[i].show();
            rain[i].fall();
            rain[i].distort((circle.size + (vol * circle.reponsive)) / 2);
        }
        pop();
        test % 600 == 0 ? console.log(frameRate()) : 0;
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
