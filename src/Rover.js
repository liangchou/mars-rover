import debugLib from "debug";

const debug = debugLib("Rover");
const rotateMap = {
    N: {
        L: "W",   // North -> turn Left -> West
        R: "E"
    },
    E: {
        L: "N",
        R: "S"
    },
    S: {
        L: "E",
        R: "W"
    },
    W: {
        L: "S",
        R: "N"
    }
};

class Rover {
    constructor (x, y, direction, grid) {
        this.x = x || 0;
        this.y = y || 0;
        this.direction = direction || "N";
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
        this.direction = rotateMap[this.direction]["L"];
    }

    turnRight () {
        this.direction = rotateMap[this.direction]["R"];
    }

    moveForward () {
        let [newX, newY] = [this.x, this.y];

        if (this.direction === "N") {
            newY = newY + 1;
        } else if (this.direction === "E") {
            newX = newX + 1;
        } else if (this.direction === "S") {
            newY = newY - 1;
        } else if (this.direction === "W") {
            newX = newX - 1;
        }

        // move forward only if it's not out of grid boundary
        if (!this.grid.isOutBoundary(newX, newY)) {
            [this.x, this.y] = [newX, newY];
        }
    }

    print () {
        console.log("(" + this.x + "," + this.y + ") " + this.direction);
    }

    getLoc () {
        return {
            x: this.x,
            y: this.y,
            direction: this.direction
        };
    }
}

export default Rover;
