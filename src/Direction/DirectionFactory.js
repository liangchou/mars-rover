import NorthDirection from "./NorthDirection";
import SouthDirection from "./SouthDirection";
import EastDirection from "./EastDirection";
import WestDirection from "./WestDirection";

class DirectionFactory {
    createDir (direction) {
        if (direction === "N") {
            return new NorthDirection();
        } else if (direction === "S") {
            return new SouthDirection();
        } else if (direction === "E") {
            return new EastDirection();
        } else if (direction === "W") {
            return new WestDirection();
        }
    }
}

export default DirectionFactory; 
