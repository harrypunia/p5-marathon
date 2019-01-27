let init = false,
    reset = false,
    col = {
        r: 25,
        g: 19,
        b: 53
    },
    web = {
        particles: [],
        population: 100,
    },
    atom = {
        shape: null,
        x: null,
        y: null,
        r: 20,
        electron: {
            population: 4,
            radius: 100
        }
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < web.population; i++) {
        web.particles[i] = new Particle(255);
    }
    atom.x = width / 2;
    atom.y = height / 2;
    atom.shape = new Atom(atom.x, atom.y, atom.r);
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
    atom.shape.update();
    atom.shape.displayElectrons(atom.electron.population, atom.electron.radius);
    atom.shape.show();
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}
