export default class Cell {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.hasShip = false;
        this.ship = null;
        this.isHit = false;
    }
}
