class Link {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.fire = {
            status: false,
            ascend: true,
            maxOpacity: 100,
            speed: 4
        }
    }
    draw() {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
    equals(link) {
        return (link.start == this.start && link.end == this.end) || (link.start == this.end && link.end == this.start);
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
