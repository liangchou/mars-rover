import EastDirection from "./EastDirection";
import WestDirection from "./WestDirection";

class NorthDirection {
    turnLeft () {
        return new WestDirection(this.rover);
    }

    turnRight () {
        return new EastDirection(this.rover);
    }

    moveForward (rover) {
        rover.goNorth();
    }

    toStr () {
        return "N";
    }
}

export default NorthDirection;
