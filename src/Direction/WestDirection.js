import NorthDirection from "./NorthDirection";
import SouthDirection from "./SouthDirection";

class WestDirection {
    turnLeft () {
        return new SouthDirection();
    }

    turnRight () {
        return new NorthDirection();
    }

    moveForward (rover) {
        rover.goWest();
    }

    toStr () {
        return "W";
    }
}

export default WestDirection;
