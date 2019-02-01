class Network {
    constructor(densityX, densityY) {
        this.size = {
            w: width / 1.5,
            h: height / 1.3,
        };
        this.grid = {
            density : {
              x : densityX,
              y: densityY
            },
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
            const {x, y} = this.getVoidPos(i);
            this.voids[i] = new Void(x, y, this.grid);
        }
    }
    show() {
        for (let i = 0; i < this.voids.length; i++) {
            this.voids[i].show();
            for(let j = 0; j < this.voids.length; j++) {
                //if(this.voids[i].canConnect(this.voids[j])) {
                    this.links[i] = new Link(this.voids[i].x, this.voids[i].y, this.voids[j].x, this.voids[j].y);
                    this.voids[i].connectionList.xIndex = this.voids[j].xIndex;
                    this.voids[i].connectionList.yIndex = this.voids[j].yIndex;
                //}
            }
        }
        for(let i = 0; i < this.links.length; i++) {
            this.links[i].show();
        }
     }
     getVoidPos(index) {
        let xIndex = index;
        let yIndex = 0;
        while(xIndex > this.grid.density.x - 1) {
            xIndex -= this.grid.density.x;
            yIndex++;
        }
        this.grid.xIndex = xIndex;
        this.grid.yIndex = yIndex;
        const minX = xIndex * this.grid.columnSize;
        const minY = yIndex * this.grid.rowSize;
        const maxX = minX + this.grid.columnSize;
        const maxY = minY + this.grid.rowSize;
        return {
            x: minX + this.grid.min.x + noise(random(100)) * (maxX - minX),
            y: minY + this.grid.min.y + noise(random(100)) * (maxY - minY)
        }
    }
}

const getUniqueNumbers = (many, max) => {
    let uniqueNumbers = []
    many > max ? many = max : 0;
    while (uniqueNumbers.length < many) {
        let r = Math.floor(Math.random() * max);
        if (uniqueNumbers.indexOf(r) === -1) uniqueNumbers.push(r);
    }
    return uniqueNumbers;
}
