/* global describe, it, before */

import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import read from 'read-file';
import Parser from '../../src/Parser';
import TurnLeftCommand from '../../src/Command/TurnLeftCommand';
import TurnRightCommand from '../../src/Command/TurnRightCommand';
import MoveForwardCommand from '../../src/Command/MoveForwardCommand';

chai.use(sinonChai);

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
            expect(roversData[0].direction).to.be.equal('N');
            expect(roversData[1].pos.x).to.be.equal(3);
            expect(roversData[1].pos.y).to.be.equal(3);
            expect(roversData[1].direction).to.be.equal('E');
        });
    });

    describe('_parseCmdsStr', () => {
        it ('should return empty array if input is invalid', () => {
            const cmds = parser._parseCmdsStr('');

            expect(cmds).to.deep.equal([]);
        });

        it ('should return commands array if input is valid', () => {
            const cmds = parser._parseCmdsStr('LRM');

            expect(cmds.length).to.be.equal(3);
            expect(cmds[0] instanceof TurnLeftCommand).to.be.true;
            expect(cmds[1] instanceof TurnRightCommand).to.be.true;
            expect(cmds[2] instanceof MoveForwardCommand).to.be.true;
        });
    });
});
