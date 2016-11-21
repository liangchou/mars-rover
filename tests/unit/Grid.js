/* global describe, it, before */

import { expect } from 'chai';
import Grid from '../../src/Grid';

describe('Grid with boundary (5, 2)', () => {
    const grid = new Grid(5, 2);

    it ('should indicate 6 is out of boundaryX', () => {
        expect(grid.isOutBoundaryX(6)).to.be.true;
    });

    it ('should indicate 5 is within boundaryX', () => {
        expect(grid.isOutBoundaryX(5)).to.be.false;
    });

    it ('should indicate 3 is out of boundaryY', () => {
        expect(grid.isOutBoundaryY(3)).to.be.true;
    });

    it ('should indicate 1 is within boundaryY', () => {
        expect(grid.isOutBoundaryY(1)).to.be.false;
    });
});
