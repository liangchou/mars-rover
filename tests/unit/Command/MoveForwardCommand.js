/* global describe, it, before, after */

import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-Chai';
import MoveForwardCommand from '../../../src/Command/MoveForwardCommand';

chai.use(sinonChai);

describe('MoveForwardCommand', () => {
    const moveForwardCommand = new MoveForwardCommand();
    const rover = {
        moveForward: () => {}
    };
    let sandbox;
    let stubMoveForward;

    before(() => {
        sandbox = sinon.sandbox.create();
        stubMoveForward = sandbox.stub(rover, 'moveForward');
    });

    it ('should execute rover with move forward command', () => {
        moveForwardCommand.execute(rover);
        expect(stubMoveForward).to.have.been.callOnce;
    });

    after(() => {
        sandbox.restore();
    });
});
