let init = false,
    reset = false,
    col = {
        r: 30,
        g: 10,
        b: 22
    },
    web = {
        particles: [],
        population: 200,
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < web.population; i++) {
        web.particles[i] = new Particle(random(width), random(height));
    }
}

function draw() {
    reset ? (background(col.r, col.g, col.b), reset = false) : background(col.r, col.g, col.b, 90);
    fill(0);
    for (let i in web.particles) {
        web.particles[i].show();
        web.particles[i].update();
        for (let j in web.particles) {
            if (i != j) {
                let inRange = Math.abs(dist(web.particles[i].x, web.particles[i].y, web.particles[j].x, web.particles[j].y)) < 100;

                if (inRange) {
                    i != j ? web.particles[i].link(web.particles[j]) : 0;
                }
            }
        }
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}
