import NorthDirection from "./NorthDirection";
import SouthDirection from "./SouthDirection";

class EastDirection {
    turnLeft () {
        return new NorthDirection();
    }

    turnRight () {
        return new SouthDirection();
    }

    moveForward (rover) {
        rover.goEast();
    }

    toStr () {
        return "E";
    }
}

export default EastDirection;
