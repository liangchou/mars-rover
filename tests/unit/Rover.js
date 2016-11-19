/* global describe, it */

import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Rover from '../../src/Rover';
import Grid from '../../src/Grid';

chai.use(sinonChai);

describe('Rover', () => {
    const grid = new Grid(5, 5);

    describe('runCmds', () => {
        const rover = new Rover(0, 0, 'N', grid);
        const cmds = [
            { execute: () => {} },
            { execute: () => {} }
        ];
        let sandbox = sinon.sandbox.create();
        let stubExecute1 = sinon.stub(cmds[0], 'execute');
        let stubExecute2 = sinon.stub(cmds[1], 'execute');

        it ('should execute each command', () => {
            rover.runCmds(cmds);
            expect(stubExecute1).to.have.been.calledOnce;
            expect(stubExecute2).to.have.been.calledOnce;
        });
    });

    describe('turnLeft', () => {
        it ('should only change direction from N to W', () => {
            const rover = new Rover(0, 0, 'N', grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });

        it ('should only change direction from W to S', () => {
            const rover = new Rover(0, 0, 'W', grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should only change direction from S to E', () => {
            const rover = new Rover(0, 0, 'S', grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should only change direction from E to N', () => {
            const rover = new Rover(0, 0, 'E', grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('N');
        });
    });

    describe('turnRight', () => {
        it ('should only change direction from N to E', () => {
            const rover = new Rover(0, 0, 'N', grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should only change direction from E to S', () => {
            const rover = new Rover(0, 0, 'E', grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should only change direction from S to W', () => {
            const rover = new Rover(0, 0, 'S', grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });

        it ('should only change direction from W to N', () => {
            const rover = new Rover(0, 0, 'W', grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('N');
        });
    });

    describe('moveForward', () => {
        it ('should move 1 step north when it will be within grid boundary', () => {
            const rover = new Rover(0, 0, 'N', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(1);
            expect(loc.direction).to.be.equal('N');
        });

        it ('should not move north when it will be out of grid boundary', () => {
            const rover = new Rover(0, 5, 'N', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(5);
            expect(loc.direction).to.be.equal('N');
        });

        it ('should move 1 step east when it will be within grid boundary', () => {
            const rover = new Rover(0, 0, 'E', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(1);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should not move east when it will be out of grid boundary', () => {
            const rover = new Rover(5, 0, 'E', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(5);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should move 1 step south when it will be within grid boundary', () => {
            const rover = new Rover(0, 5, 'S', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(4);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should not move south when it will be out of grid boundary', () => {
            const rover = new Rover(0, 0, 'S', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should move 1 step west when it will be within grid boundary', () => {
            const rover = new Rover(5, 0, 'W', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(4);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });

        it ('should not move west when it will be out of grid boundary', () => {
            const rover = new Rover(0, 0, 'W', grid);
            rover.moveForward();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });
    });
});
