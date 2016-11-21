/* global describe, it, before, after */

import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Rover from '../../src/Rover';
import Grid from '../../src/Grid';
import NorthDirection from '../../src/Direction/NorthDirection';
import SouthDirection from '../../src/Direction/SouthDirection';
import EastDirection from '../../src/Direction/EastDirection';
import WestDirection from '../../src/Direction/WestDirection';

chai.use(sinonChai);

describe('Rover', () => {
    const grid = new Grid(5, 5);
    const northDirection = new NorthDirection();
    const southDirection = new SouthDirection();
    const eastDirection = new EastDirection();
    const westDirection = new WestDirection();

    describe('runCmds', () => {
        let sandbox;

        before(() => {
            sandbox = sinon.sandbox.create();
        });

        it ('should execute each command', () => {
            const rover = new Rover(0, 0, northDirection, grid);
            const cmds = [
                { execute: () => {} },
                { execute: () => {} }
            ];
            let stubExecute1 = sinon.stub(cmds[0], 'execute');
            let stubExecute2 = sinon.stub(cmds[1], 'execute');

            rover.runCmds(cmds);
            expect(stubExecute1).to.have.been.calledOnce;
            expect(stubExecute2).to.have.been.calledOnce;
        });

        after(() => {
            sandbox.restore();
        });
    });

    describe('turnLeft', () => {
        it ('should only change direction from N to W', () => {
            const rover = new Rover(0, 0, northDirection, grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });

        it ('should only change direction from W to S', () => {
            const rover = new Rover(0, 0, westDirection, grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should only change direction from S to E', () => {
            const rover = new Rover(0, 0, southDirection, grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should only change direction from E to N', () => {
            const rover = new Rover(0, 0, eastDirection, grid);
            rover.turnLeft();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('N');
        });
    });

    describe('turnRight', () => {
        it ('should only change direction from N to E', () => {
            const rover = new Rover(0, 0, northDirection, grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should only change direction from E to S', () => {
            const rover = new Rover(0, 0, eastDirection, grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should only change direction from S to W', () => {
            const rover = new Rover(0, 0, southDirection, grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });

        it ('should only change direction from W to N', () => {
            const rover = new Rover(0, 0, westDirection, grid);
            rover.turnRight();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('N');
        });
    });

    describe('moveForward', () => {
        let sandbox;

        before(() => {
            sandbox = sinon.sandbox.create();
        });

        it ('should call direction with moveForward', () => {
            const direction = {
                moveForward: () => {}
            };
            const stubMoveForward = sandbox.stub(direction, 'moveForward');
            const rover = new Rover(0, 0, direction, grid);

            rover.moveForward();
            expect(stubMoveForward).to.have.been.calledOnce;
        });

        after(() => {
            sandbox.restore();
        });
    });

    describe('goNorth', () => {
        it ('should move 1 step north when it will be within grid boundary', () => {
            const rover = new Rover(0, 0, northDirection, grid);
            rover.goNorth();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(1);
            expect(loc.direction).to.be.equal('N');
        });

        it ('should not move north when it will be out of grid boundary', () => {
            const rover = new Rover(0, 5, northDirection, grid);
            rover.goNorth();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(5);
            expect(loc.direction).to.be.equal('N');
        });
    });

    describe('goEast', () => {
        it ('should move 1 step east when it will be within grid boundary', () => {
            const rover = new Rover(0, 0, eastDirection, grid);
            rover.goEast();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(1);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });

        it ('should not move east when it will be out of grid boundary', () => {
            const rover = new Rover(5, 0, eastDirection, grid);
            rover.goEast();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(5);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('E');
        });
    });

    describe('goSouth', () => {
        it ('should move 1 step south when it will be within grid boundary', () => {
            const rover = new Rover(0, 5, southDirection, grid);
            rover.goSouth();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(4);
            expect(loc.direction).to.be.equal('S');
        });

        it ('should not move south when it will be out of grid boundary', () => {
            const rover = new Rover(0, 0, southDirection, grid);
            rover.goSouth();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('S');
        });
    });

    describe('goWest', () => {
        it ('should move 1 step west when it will be within grid boundary', () => {
            const rover = new Rover(5, 0, westDirection, grid);
            rover.goWest();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(4);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });

        it ('should not move west when it will be out of grid boundary', () => {
            const rover = new Rover(0, 0, westDirection, grid);
            rover.goWest();
            const loc = rover.getLoc();

            expect(loc.x).to.be.equal(0);
            expect(loc.y).to.be.equal(0);
            expect(loc.direction).to.be.equal('W');
        });
    });
});
