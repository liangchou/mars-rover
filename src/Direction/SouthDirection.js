import EastDirection from "./EastDirection";
import WestDirection from "./WestDirection";

class SouthDirection {
    turnLeft () {
        return new EastDirection(this.rover);
    }

    turnRight () {
        return new WestDirection(this.rover);
    }

    moveForward (rover) {
        rover.goSouth();
    }

    toStr () {
        return "S";
    }
}

export default SouthDirection;
