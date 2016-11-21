class Grid {
    constructor (x, y) {
        this.boundaryX = x || 0;
        this.boundaryY = y || 0;
    }

    isOutBoundaryX (x) {
        return (x < 0 || x > this.boundaryX);
    }

    isOutBoundaryY (y) {
        return (y < 0 || y > this.boundaryY);
    }
}

export default Grid;
