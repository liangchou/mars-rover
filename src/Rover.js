import NorthDirection from "./Direction/NorthDirection";
import debugLib from "debug";

const debug = debugLib("Rover");

class Rover {
    constructor (x, y, direction, grid) {
        this.x = x || 0;
        this.y = y || 0;
        this.direction = direction || new NorthDirection();
        this.grid = grid || { 
            isOutBoundary: () => { return true; }
        };
    }

    runCmds (cmds) {
        cmds.map((cmd) => {
            cmd.execute(this);
            debug(this.getLoc());
        });
    }

    turnLeft () {
        this.direction = this.direction.turnLeft();
    }

    turnRight () {
        this.direction = this.direction.turnRight();
    }

    moveForward () {
        this.direction.moveForward(this);
    }

    goNorth () {
        if (!this.grid.isOutBoundaryY(this.y+1)) {
            this.y = this.y + 1;
        }
    }

    goWest () {
        if (!this.grid.isOutBoundaryX(this.x - 1)) {
            this.x = this.x - 1;
        }
    }

    goSouth () {
        if (!this.grid.isOutBoundaryY(this.y-1)) {
            this.y = this.y - 1;
        }
    }

    goEast () {
        if (!this.grid.isOutBoundaryX(this.x + 1)) {
            this.x = this.x + 1;
        }
    }

    getLoc () {
        return {
            x: this.x,
            y: this.y,
            direction: this.direction.toStr()
        };
    }
}

export default Rover;
