export default class Ship {
    constructor(name, length, rotation) {
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.coordinatesList = null;
        this.isSunk = false;
        this.rotation = rotation;
    }

    hit() {
        this.hits += 1;
        if(this.hits >= this.length) {
            this.isSunk = true;
        }
    }

}