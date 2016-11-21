/* global describe, it, before, after */

import { expect } from 'chai';
import DirectionFactory from '../../../src/Direction/DirectionFactory';
import EastDirection from '../../../src/Direction/EastDirection';
import NorthDirection from '../../../src/Direction/NorthDirection';
import SouthDirection from '../../../src/Direction/SouthDirection';
import WestDirection from '../../../src/Direction/WestDirection';

describe('DirectionFactory', () => {
    const directionFactory = new DirectionFactory();

    it ('should create EastDirection with input E', () => {
        const dir = directionFactory.createDir('E');
        expect(dir instanceof EastDirection).to.be.true;
    });

    it ('should create EastDirection with input N', () => {
        const dir = directionFactory.createDir('N');
        expect(dir instanceof NorthDirection).to.be.true;
    });

    it ('should create EastDirection with input S', () => {
        const dir = directionFactory.createDir('S');
        expect(dir instanceof SouthDirection).to.be.true;
    });

    it ('should create EastDirection with input W', () => {
        const dir = directionFactory.createDir('W');
        expect(dir instanceof WestDirection).to.be.true;
    });
});
