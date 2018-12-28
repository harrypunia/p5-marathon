let col = {
        dark: {
            r: 0,
            g: 26,
            b: 35
        },
        blue: {
            r: 1,
            g: 23,
            b: 47
        },
        dGreen: {
            r: 49,
            g: 73,
            b: 60
        },
        green: {
            r: 122,
            g: 158,
            b: 126
        },
        red: {
            r: 124,
            g: 53,
            b: 69
        }
    },
    particles = [],
    init = false,
    a = 0,
    resetBackground = false;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    background(col.dark.r, col.dark.g, col.dark.b);
    for (let i = 0; i < 20; i++) {
        particles[i] = new Particle;
    }
}

function draw() {
    //resetBackground ? (background(col.dark.r, col.dark.g, col.dark.b), resetBackground = false) : background(col.dark.r, col.dark.g, col.dark.b, 20);
    background(col.dark.r, col.dark.g, col.dark.b);
    if (init) {
        for (let i in particles) {
            particles[i].show();
            particles[i].update();
        }
        spiral(100, .01, 10);
    }
}

const spiral = (r, freq, n) => {
    fill(255);
    for (let i = 0; i < n; i++) {
        let mapIndex = map(n / i, 0, n, 0, 2),
            offset = Math.PI * mapIndex,
            posX = r * Math.cos(a + offset) + (width / 2),
            posY = r * Math.sin(a + offset) + (height / 2);
        ellipse(posX, posY, 10, 10);
    }
    a += freq
}

function windowResized() {
    //resetBackground = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const startSketch = () => {
    init = true;
    let play = document.getElementsByClassName('play')[0];
    play.style.display = 'none';
}

//Testing [DELETE]
const say = msg => console.log(msg);
