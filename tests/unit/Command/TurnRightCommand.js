/* global describe, it, before, after */

import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-Chai';
import TurnRightCommand from '../../../src/Command/TurnRightCommand';

chai.use(sinonChai);

describe('TurnRightCommand', () => {
    const turnRightCommand = new TurnRightCommand();
    const rover = {
        turnRight: () => {}
    };
    let sandbox;
    let stubTurnRight;

    before(() => {
        sandbox = sinon.sandbox.create();
        stubTurnRight = sandbox.stub(rover, 'turnRight');
    });

    it ('should execute rover with turn right command', () => {
        turnRightCommand.execute(rover);
        expect(stubTurnRight).to.have.been.callOnce;
    });

    after(() => {
        sandbox.restore();
    });
});
