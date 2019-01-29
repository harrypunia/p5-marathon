let col = {
        r: 25,
        g: 19,
        b: 53
    },
    web = {
        particles: [],
        density: {
            x: 10,
            y: 6
        }
    },
    atom = {
        r: 20,
    },
    electrons = {
        e: [],
        population: 3,
        radius: 150,
        speed: 0.02,
        size: 12,
        trail: true
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //WEB
    for (let i = 0; i < web.density.x * web.density.y; i++) {
        web.particles[i] = new Particle(255, 255, 255, web.density.x, web.density.y, i); //(r, g, b, density, index);
    }
    //ELECTRONS
    for (let i = 0; i < electrons.population; i++) {
        electrons.e[i] = new Electron(electrons.radius, electrons.trail, electrons.size, electrons.speed); // (radius, trail(true/false));
    }
}

function draw() {
    background(col.r, col.g, col.b);
    fill(0);
    //WEB
    for (let i in web.particles) {
        web.particles[i].show();
        for (let j in web.particles) {
            //stroke(255, 30);
            i != j ? web.particles[i].link(web.particles[j]) : 0;
        }
    }
    //ATOM
    noStroke();
    fill(255);
    ellipse(width / 2, height / 2, atom.r * 2, atom.r * 2);
    //ELECTRONS
    for (let i = 0; i < electrons.population; i++) {
        let angle = (i / electrons.population) * 6.28 + (1.57 / electrons.population);
        push();
        translate(width / 2, height / 2);
        rotate(angle);
        electrons.e[i].show();
        if (!electrons.trail) {
            stroke(170, 16, 214, 200);
            strokeWeight(1);
            noFill();
            ellipse(0, 0, electrons.radius / 2, electrons.radius * 2);
        }
        pop();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}