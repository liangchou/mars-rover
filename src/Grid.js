class Grid {
    constructor (x, y) {
        this.boundaryX = x || 0;
        this.boundaryY = y || 0;
    }

    isOutBoundary (x , y) {
        return (x < 0 || y < 0 || x > this.boundaryX || y > this.boundaryY);
    }
}

export default Grid;
