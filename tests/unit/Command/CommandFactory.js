/* global describe, it, before, after */

import { expect } from 'chai';
import CommandFactory from '../../../src/Command/CommandFactory';
import TurnLeftCommand from '../../../src/Command/TurnLeftCommand';
import TurnRightCommand from '../../../src/Command/TurnRightCommand';
import MoveForwardCommand from '../../../src/Command/MoveForwardCommand';

describe('CommandFactory', () => {
    const commandFactory = new CommandFactory();

    it ('should return empty array if input is invalid', () => {
        const cmds = commandFactory.createCmds('');

        expect(cmds).to.deep.equal([]);
    });

    it ('should return commands array if input is valid', () => {
        const cmds = commandFactory.createCmds('LRM');

        expect(cmds.length).to.be.equal(3);
        expect(cmds[0] instanceof TurnLeftCommand).to.be.true;
        expect(cmds[1] instanceof TurnRightCommand).to.be.true;
        expect(cmds[2] instanceof MoveForwardCommand).to.be.true;
    });
});
