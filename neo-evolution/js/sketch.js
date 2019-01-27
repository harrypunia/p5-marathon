let col = {
        r: 25,
        g: 19,
        b: 53
    },
    web = {
        particles: [],
        population: 150,
    },
    atom = {
        r: 20,
    },
    electrons = {
        e: [],
        population: 6,
        radius: 150,
        speed: 0.01,
        size: 10
    },
    connectionLength = 100,
    connectionDensity = 5;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //WEB
    for (let i = 0; i < web.population; i++) {
        web.particles[i] = new Particle(255); //(r, g, b);
    }
    //ELECTRONS
    for (let i = 0; i < electrons.population; i++) {
        electrons.e[i] = new Electron(electrons.radius); // (x, y, radius, increment, population)
    }
}

function draw() {
    background(col.r, col.g, col.b);
    fill(0);
    //WEB
    for (let i in web.particles) {
        web.particles[i].update();
        web.particles[i].show();
        for (let j in web.particles) {
            if (i != j) {
                let gap = Math.abs(dist(web.particles[i].x, web.particles[i].y, web.particles[j].x, web.particles[j].y)),
                    inRange = gap < connectionLength && gap > connectionLength - connectionDensity;

                if (inRange) {
                    i != j ? web.particles[i].link(web.particles[j]) : 0;
                }
            }
        }
    }
    //ATOM
    noStroke();
    fill(255);
    ellipse(width / 2, height / 2, atom.r * 2, atom.r * 2);
    //ELECTRONS
    for (let i = 0; i < electrons.population; i++) {
        let angle = (i / electrons.population) * 6.28;
        push();
        translate(width / 2, height / 2);
        rotate(angle);
        electrons.e[i].revolve(electrons.speed);
        electrons.e[i].show(electrons.size);
        //
        stroke(170, 16, 214, 50);
        strokeWeight(1);
        noFill();
        ellipse(0, 0, electrons.radius / 2, electrons.radius * 2);
        //
        pop();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
