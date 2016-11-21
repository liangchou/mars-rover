import read from "read-file";
import Parser from "./Parser";
import Grid from "./Grid";
import Rover from "./Rover";

const txtStr = read.sync("input.txt", "utf8");
const parser = new Parser(txtStr);
const boundary = parser.getGridBoundary();
const grid = new Grid(boundary.x, boundary.y);
const roversData = parser.getRoversData();

roversData.map((r) => {
    let pos = r.pos;
    let rover = new Rover(pos.x, pos.y, r.direction, grid);

    rover.runCmds(r.cmds);
    console.log(rover.getLoc());
});
