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
    atom = { //Atom object
        shape: null,
        x: null,
        y: null,
        r: 20,
    },
    electrons = { //Electron Object
        e: [],
        population: 4,
        radius: 100
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < web.population; i++) {
        web.particles[i] = new Particle(255); //(r, g, b);
    }
    //--
    atom.x = width / 2; //Position of atom
    atom.y = height / 2; //Position of atom
    atom.shape = new Atom(atom.x, atom.y, atom.r); //(x, y, r, electronPopulatio, electronRadius)
    //--
    for (let i = 0; i < electrons.population; i++) {
        electrons.e[i] = new Electron(i, electrons.population, electrons.radius); // (x, y, radius, increment, population)
    }
}

function draw() {
    reset ? (background(col.r, col.g, col.b), reset = false) : background(col.r, col.g, col.b);
    fill(0);
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
    atom.shape.show();

    for (let i in electrons.e) {
        electrons.e[i].revolve();
        electrons.e[i].show();
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}
