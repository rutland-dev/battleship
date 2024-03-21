import Cell from "./cell.js";
import Ship from "./ship.js";
import * as dom from "./DOM.js";

export default class Gameboard {
    constructor(player) {
        this.player = player;
        this.letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        this.grid = new Map();
        this.letterArray.forEach(letter => {
            for(let i = 1; i < 11; i += 1) {
                const coordinates = `${letter}${i}`;
                this.grid.set(coordinates, new Cell(coordinates));
            }
        });
        this.allShipsSunk = false;
        this.startingShips = [
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
        this.shipsInUse = [];
        this.sunkShips = [];
    }

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
                throw Error("Ship placement extends out of range");
            }
            
            for(let i = numeric; i < currentShip.length + numeric; i += 1) {
                coordinateList.push(`${alpha}${i}`);
            }
        }

        coordinateList.forEach(coordinate => {
            if(this.grid.get(coordinate).hasShip) {
                throw Error("Ship placement overlaps another ship");
            }
        });

        coordinateList.forEach(coordinate => {
            const cell = this.grid.get(coordinate);
            cell.hasShip = true;
            cell.ship = currentShip;
            cell.ship.coordinateList = coordinateList;
            dom.displayShip(`${this.player.playerNumber}-${coordinate}`);
        });

        this.shipsInUse.push(currentShip);

    }

    checkIfAllSunk() {
        if(this.sunkShips.length === this.shipsInUse.length) this.allShipsSunk = true;
    }

    // Random setup function. Places ships on the grid randomly until all ships are placed.
    randomShipPlacement() {
        const availableShips = this.startingShips;
        while(availableShips.length) {
            const currentShip = availableShips[0];
            const coordinates = `${this.letterArray[Math.floor((Math.random())* 10) - 1]}${parseInt(Math.floor((Math.random()) * 10), 10) + 1}`;
            const coinFlip = Math.round(Math.random());
            let rotation;

            if(coinFlip === 0) {
                rotation = "vertical";
            } else {
                rotation = "horizontal";
            }

            try {
                this.placeShip(currentShip.name, currentShip.length, coordinates, rotation, this.player);
                availableShips.shift();
            } catch {
                this.randomShipPlacement();
            }
        }
    }

    receiveAttack(coordinates) {
        const currentCell = this.grid.get(coordinates);

        if(currentCell.isHit) {
            throw Error("This coordinate has already been hit");
        }

        currentCell.isHit = true;

        dom.displayHit(`${this.player.playerNumber}-${coordinates}`);

        if(currentCell.hasShip) {
            currentCell.ship.hit();
            if(currentCell.ship.isSunk) {
                this.sunkShips.push(currentCell.ship);
                dom.sinkShip(this.player, currentCell.ship);
                this.checkIfAllSunk();
            }
        } else {
            this.player.isTurn = true;
            this.player.opponent.isTurn = false;
        }
    }
}