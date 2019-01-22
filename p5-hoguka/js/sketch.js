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
    eye = 255,
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
        rain[i] = new Rain((width / (2 * rainIntensity)) * (i + 1) - (width / 4), random(-height / 2, -height * 2), random(10, 100));
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
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 20);
    circle.x = map(mouseX, 0, width, -20, 20);
    circle.y = map(mouseY, 0, height, -20, 20);

    if (init) {
        vol = amp.getLevel();
        //-------------------
        push();
        translate(width / 2, height / 2);
        //
        fill(0);
        ellipse(circle.x, circle.y, (circle.size / 10) + (vol * circle.reponsive), circle.size + (vol * circle.reponsive));
        //
        noFill();
        for (let i = 0; i < 10; i++) {
            let op = map(i, 0, 10, 255, 0);
            stroke(0, op);
            ellipse(circle.x, circle.y, (circle.size / 10) + (i * 10) + (vol * circle.reponsive), circle.size + (i * 10) + (vol * circle.reponsive));
        }
        //
        if (vol > 0.5) {
            eye = 255
            fill(190, 200, 200);
            noStroke();
            ellipse(circle.x, circle.y, (circle.size / 12) + vol * 100, (circle.size / 12) + vol * 100);
        } else {
            eye -= 5;
            fill(190, 200, 200, eye);
            noStroke();
            ellipse(circle.x, circle.y, (circle.size / 12) + vol * 100, (circle.size / 12) + vol * 100);
        }
        //
        for (let i = 0; i < rainIntensity; i++) {
            rain[i].show();
            rain[i].fall();
            rain[i].distort((circle.size / 10) + (vol * circle.reponsive), (circle.size + (vol * circle.reponsive)));
        }
        pop();
        test % 100 == 0 ? console.log(frameRate()) : 0;
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
