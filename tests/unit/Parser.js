/* global describe, it, before */

import { expect } from 'chai';
import read from 'read-file';
import Parser from '../../src/Parser';

describe('Parser', () => {
    const txtStr = read.sync(__dirname + '/data/input.txt', 'utf8');
    const parser = new Parser('');

    describe('parseTxt', () => {
        it ('should retrive grid bounday and rovers data', () => {
            const res = parser.parseTxt(txtStr);
            const gridBoundary = res.gridBoundary;
            const roversData = res.roversData;

            expect(gridBoundary.x).to.be.equal(5);
            expect(gridBoundary.y).to.be.equal(5);
            expect(roversData.length).to.be.equal(2);
            expect(roversData[0].pos.x).to.be.equal(1);
            expect(roversData[0].pos.y).to.be.equal(2);
            expect(roversData[0].direction.toStr()).to.be.equal('N');
            expect(roversData[1].pos.x).to.be.equal(3);
            expect(roversData[1].pos.y).to.be.equal(3);
            expect(roversData[1].direction.toStr()).to.be.equal('E');
        });
    });
});
