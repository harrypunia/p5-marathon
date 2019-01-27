let init = false,
    reset = false,
    col = { // Canvas color
        r: 25,
        g: 19,
        b: 53
    },
    web = { //Web object
        particles: [],
        population: 100,
    },
    atom = { //Atom
        x: null,
        y: null,
        r: 20,
    },
    electrons = { //Electron Object
        e: [],
        population: 10,
        radius: 150,
        speed: 0.01,
        size: 4
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //WEB
    for (let i = 0; i < web.population; i++) {
        web.particles[i] = new Particle(255); //(r, g, b);
    }
    //ATOM
    atom.x = width / 2;
    atom.y = height / 2;
    //ELECTRONS
    for (let i = 0; i < electrons.population; i++) {
        electrons.e[i] = new Electron(electrons.radius); // (x, y, radius, increment, population)
    }
}

function draw() {
    reset ? (background(col.r, col.g, col.b), reset = false) : background(col.r, col.g, col.b);
    fill(0);
    //WEB
    for (let i in web.particles) {
        web.particles[i].update();
        web.particles[i].show();
        for (let j in web.particles) {
            if (i != j) {
                let inRange = Math.abs(dist(web.particles[i].x, web.particles[i].y, web.particles[j].x, web.particles[j].y)) < 100;

                if (inRange) {
                    i != j ? web.particles[i].link(web.particles[j]) : 0;
                }
            }
        }
    }
    //ATOM
    noStroke();
    fill(255);
    ellipse(atom.x, atom.y, atom.r * 2, atom.r * 2);
    //ELECTRONS
    for (let i = 0; i < electrons.population; i++) {
        let angle = (i / electrons.population) * 6.28;
        push();
        translate(atom.x, atom.y);
        rotate(angle);
        strokeWeight(1);
        stroke(170, 16, 214, 50);
        ellipse(0, 0, electrons.r * 2, electrons.r / 2);
        electrons.e[i].revolve(electrons.speed);
        electrons.e[i].show(electrons.size);
        pop();
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}
