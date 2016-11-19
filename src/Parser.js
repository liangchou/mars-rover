import TurnLeftCommand from "./Command/TurnLeftCommand";
import TurnRightCommand from "./Command/TurnRightCommand";
import MoveForwardCommand from "./Command/MoveForwardCommand";
import debugLib from "debug";

const debug = debugLib("Parser");

class Parser {
    constructor (txtStr) {
        const res = this.parseTxt(txtStr) || {};

        this.gridBoundary = res.gridBoundary || {};
        this.roversData = res.roversData || [];
    }

    parseTxt (txtStr) {
        if (!txtStr || !txtStr.split) {
            debug("parseTxtInput: invalid input", txtStr);
            return;
        }

        let res = {
            gridBoundary: {
                x: 0,
                y: 0
            },
            roversData: []
        };
        let lines = txtStr.split("\n").filter((line) => {
            if (line && line.trim()) {
                return line.trim();
            }
        });

        if (lines.length < 3 || (lines.length%2 === 0)) {
            debug("parseTxtInput: invalid format", lines);
            return;
        }

        // get grid boundary data from first line
        let [x, y] = lines[0].split(" ");
        res.gridBoundary = {
            x: parseInt(x, 10) || 0,
            y: parseInt(y, 10) || 0
        };
        debug(res.gridBoundary);

        // get list of rover input data like pos, direction, commands
        for (let i=1, len=lines.length; i<len; i=i+2) {
            let [x, y, direction] = lines[i].split(" ");
            let cmds = this._parseCmdsStr(lines[i+1]);

            debug(x, y, direction, lines[i+1]);
            res.roversData.push({
                pos: {
                    x: parseInt(x, 10) || 0,
                    y: parseInt(y, 10) || 0
                },
                direction: direction,
                cmds: cmds
            });
        }

        return res;
    }

    _parseCmdsStr (cmdsStr) {
        let cmds = [];

        cmdsStr.split("").map((cmd) => {
            if (cmd === "L") {
                cmds.push(new TurnLeftCommand());
            } else if (cmd === "R") {
                cmds.push(new TurnRightCommand());
            } else if (cmd === "M") {
                cmds.push(new MoveForwardCommand());
            }
        });

        return cmds;
    }

    getGridBoundary () {
        return this.gridBoundary;
    }

    getRoversData () {
        return this.roversData;
    }
}

export default Parser;
