class Network {
    constructor(densityX, densityY) {
        this.density = {
            x: densityX,
            y: densityY
        }
        this.size = {
            w: width / 1.5,
            h: height / 1.3,
        };
        this.grid = {
            columnSize: this.size.w / densityX,
            rowSize: this.size.h / densityY,
            min: {
                x: (width - this.size.w) / 2,
                y: (height - this.size.h) / 2
            }
        };
        this.voids = [];
        this.links = [];
        for (let i = 0; i < densityX * densityY; i++) {
            const {x, y}  = this.getVoidPos(i);
            this.particles[i] = new Particle(x, y);
        }
    }
    getVoidPos (index) {
        const xIndex: index;
        const yIndex : 0
        while(index > this.density.x) {
            xIndex - this.density.x;
            yIndex++;
        }
        const minX = xIndex * this.grid.columnSize;
        const minY = yIndex * this.grid.rowSize;
        const maxX = minX + this.grid.columnSize;
        const maxY = minX + this.grid.rowSize;
        return {
            x: minX + this.grid.min.x + noise(random(100)) * (maxX - minX),
            y: minY +this.grid.min.y + noise(random(100)) * (maxY - minY)
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
