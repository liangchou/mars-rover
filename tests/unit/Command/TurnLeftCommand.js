/* global describe, it, before, after */

import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-Chai';
import TurnLeftCommand from '../../../src/Command/TurnLeftCommand';

chai.use(sinonChai);

describe('TurnLeftCommand', () => {
    const turnLeftCommand = new TurnLeftCommand();
    const rover = {
        turnLeft: () => {}
    };
    let sandbox;
    let stubTurnLeft;

    before(() => {
        sandbox = sinon.sandbox.create();
        stubTurnLeft = sandbox.stub(rover, 'turnLeft');
    });

    it ('should execute rover with turn left command', () => {
        turnLeftCommand.execute(rover);
        expect(stubTurnLeft).to.have.been.callOnce;
    });

    after(() => {
        sandbox.restore();
    });
});
