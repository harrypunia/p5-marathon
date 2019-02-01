class Link {
    constructor(x1, y1, x2, y2) {
        this.start = {
            x: x1,
            y: y1
        };
        this.end = {
            x: x2,
            y: y2
        };
        this.fire = {
            status: false,
            ascend: true,
            maxOpacity: 100,
            speed: 4
        }
    }
    show() {
        strokeWeight(1);
        stroke(255, 20);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
    //    link(other) {
//        const inRange = (Math.abs(this.grid.x - other.grid.x) == 1) && (Math.abs(this.grid.y - other.grid.y)) <= 1;
//        if (inRange) {
//            strokeWeight(1);
//            let linked = false;
//            for(let i = 0; i < this.links.length; i++){
//                if(this.links[i].x == other.x && this.links[i].y == other.y) {
//                    linked = true;
//                    break;
//                }
//            }
//            linked ? stroke(255, this.line.opacity) : stroke(255, this.line.initOpacity);
//            line(this.point.pos.x, this.point.pos.y, other.point.pos.x, other.point.pos.y);
//        }
//    }
//    getConnections(initLinks) {
//        let linkIndex = this.genUniqueNumbers(initLinks, this.possibleLinks.length);
//        for (let i in linkIndex) {
//            this.links[i] = this.possibleLinks[linkIndex[i]];
//        }
//        return this.links;
//    }
}
