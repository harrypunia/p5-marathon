class Network {
    constructor(densityX, densityY) {
        this.particles = [];
        this.links = [];
        for (let i = 0; i < this.densityX * this.densityY; i++) {
            this.particles[i] = new Particle(this.densityX, this.densityY, i); //(density, index);
        }
    }
    show() {
        for (let i in this.particles) {
            this.particles[i].show();
        }
    }
}

const genUniqueNumbers = (many, max) => {
    let uniqueNumbers = []
    many > max ? many = max : 0;
    while (uniqueNumbers.length < many) {
        let r = Math.floor(Math.random() * max);
        if (uniqueNumbers.indexOf(r) === -1) uniqueNumbers.push(r);
    }
    return uniqueNumbers;
}