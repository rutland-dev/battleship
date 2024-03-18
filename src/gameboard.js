import Cell from "./cell";
import Ship from "./ship";

export default class Gameboard {
    constructor(player) {
        this.player = player;
        this.letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        this.grid = [];
        // Assigns alpha-numeric coordinates to each cell object in the grid
        for(let i = 0; i < 10; i += 1) {
            for(let j = 1; j < 11; j += 1) {
                const currentCoordinate = `${this.letterArray[i]}${j}`;
                this.grid.push(new Cell(currentCoordinate));
            }
        }
        this.availableShips = [
            {
                name: "Carrier",
                length: 5,
            },
            {
                name: "Battleship",
                length: 4,
            },
            {
                name: "Cruiser",
                length: 3,
            },
            {
                name: "Submarine",
                length: 3,
            },
            {
                name: "Destroyer",
                length: 2,
            },
        ];
        this.cellsWithShips = [];
    }
    // Place ship function. Takes ship name, length, rotation, and coordinates and adds it to the grid.

    placeShip(shipName, shipLength, coordinates, rotation) {
        const currentShip = new Ship(shipName, shipLength);
        const coordinateList = [];
        const alpha = coordinates.charAt(0);
        const numeric = parseInt(coordinates.charAt(1), 10);

        if(rotation === "vertical") {
            let startingIndex = this.letterArray.indexOf(alpha);
        
            if(startingIndex + currentShip.length > 10) {
                throw Error("Ship placement extends out of range");
            }

            for(let i = 0; i < currentShip.length; i += 1) {
                coordinateList.push(`${this.letterArray[startingIndex]}${numeric}`);
                startingIndex += 1;
            }

        } else {
            if(numeric + currentShip.length > 10) {
                console.log(numeric + currentShip.length);
                throw Error("Ship placement extends out of range");
            }
            
            for(let i = numeric; i < currentShip.length + numeric; i += 1) {
                coordinateList.push(`${alpha}${i}`);
            }
        }

        coordinateList.forEach(coordinate => {
            if(this.cellsWithShips.includes(coordinate)) {
                throw Error("Ship placement overlaps another ship");
            }
        });

        for(let j = 0; j < this.grid.length; j += 1) {
            const cell = this.grid[j];
            if(coordinateList.includes(cell.coordinates)) {
                cell.hasShip = true;
                cell.ship = currentShip;
                this.cellsWithShips.push(cell.coordinates);
            }
        }

    }

    // Random setup function. Places ships on the grid randomly until all ships are placed.

    // receiveAttack function needs to be able to call the hit function of a ship if present.
    receiveAttack(coordinates) {
        let currentCell;
        this.grid.forEach(cell => {
            if(cell.coordinates === coordinates) {
                currentCell = cell;
            }
        });

        if(currentCell.isHit) {
            throw Error("This coordinate has already been hit");
        }

        currentCell.isHit = true;
        if(currentCell.hasShip) {
            currentCell.ship.hit();
        }
    }
}