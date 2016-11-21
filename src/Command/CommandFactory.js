import TurnLeftCommand from "./TurnLeftCommand";
import TurnRightCommand from "./TurnRightCommand";
import MoveForwardCommand from "./MoveForwardCommand";

class CommandFactory {
    createCmds (cmdsStr) {
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
}

export default CommandFactory; 
