/* global describe, it, before */

import { expect } from 'chai';
import Grid from '../../src/Grid';

describe('Grid with boundary (5, 5)', () => {
    const grid = new Grid(5, 5);

    it ('should indicate (3, 6) is out of boundary', () => {
        expect(grid.isOutBoundary(5, 6)).to.be.true;
    });

    it ('should indicate (0, 5) is within boundary', () => {
        expect(grid.isOutBoundary(1, 5)).to.be.false;
    });
});
