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
        this.triedCoordinates = [];
    }

    placeShip(shipName, shipLength, coordinates, rotation) {
        // Creates a new ship
        const currentShip = new Ship(shipName, shipLength, rotation);
        const alpha = coordinates.charAt(0);
        const numeric = parseInt(coordinates.charAt(1), 10);

        if(rotation === "vertical") {
            let startingIndex = this.letterArray.indexOf(alpha);
        
            if(startingIndex + currentShip.length > 10) {
                throw Error("Ship placement extends out of range");
            }

            for(let i = 0; i < currentShip.length; i += 1) {
                currentShip.coordinateList.push(`${this.letterArray[startingIndex]}${numeric}`);
                startingIndex += 1;
            }

        } else {
            if(numeric + currentShip.length > 10) {
                throw Error("Ship placement extends out of range");
            }
            
            for(let i = numeric; i < currentShip.length + numeric; i += 1) {
                currentShip.coordinateList.push(`${alpha}${i}`);
            }
        }

        currentShip.coordinateList.forEach(coordinate => {
            if(this.grid.get(coordinate).hasShip) {
                throw Error("Ship placement overlaps another ship");
            }
        });

        currentShip.coordinateList.forEach(coordinate => {
            const cell = this.grid.get(coordinate);
            cell.hasShip = true;
            cell.ship = currentShip;
            dom.assignShipClass(this.player, coordinate);
        });

        this.shipsInUse.push(currentShip);

        dom.displayMiniShip(this.player, currentShip.name, currentShip.coordinateList[0], rotation);

    }

    checkIfAllSunk() {
        if(this.sunkShips.length === this.shipsInUse.length) this.allShipsSunk = true;
    }

    generateRandomCoordinates() {
        if(this.triedCoordinates.length >= 100) throw Error("All coordinates failed");

        const coordinates = `${this.letterArray[Math.floor((Math.random())* 10)]}${parseInt(Math.floor((Math.random()) * 10), 10) + 1}`;
        if(this.triedCoordinates.includes(coordinates)) {
            this.generateRandomCoordinates();
        }

        return coordinates;
    }

    // Random setup function. Places ships on the grid randomly until all ships are placed.
    randomShipPlacement() {
        const availableShips = this.startingShips;
        while(availableShips.length) {
            const currentShip = availableShips[0];
            const coordinates = this.generateRandomCoordinates();
            const coinFlip = Math.round(Math.random());
            // let rotation;

            const rotation = coinFlip ? "horizontal" : "vertical";

            // if(coinFlip === 0) {
            //     rotation = "vertical";
            // } else {
            //     rotation = "horizontal";
            // }

            try {
                this.placeShip(currentShip.name, currentShip.length, coordinates, rotation, this.player);
                availableShips.shift();
                this.triedCoordinates.push(coordinates);
            } catch {
                this.randomShipPlacement();
                this.triedCoordinates.push(coordinates);
            }
        }
        this.triedCoordinates = [];
    }

    receiveAttack(coordinates) {
        const currentCell = this.grid.get(coordinates);

        if(currentCell.isHit) {
            throw new Error("Coordinate already hit");
        }

        currentCell.isHit = true;

        dom.displayHit(this.player, coordinates);

        if(currentCell.hasShip) {
            currentCell.ship.hit();
            dom.hitShip(this.player, coordinates);
            if(currentCell.ship.isSunk) {
                this.sunkShips.push(currentCell.ship);
                dom.sinkShip(this.player, currentCell.ship);
                dom.displayShip(this.player, currentCell.ship.name, `${this.player.playerNumber}-${currentCell.ship.coordinateList[0]}`, currentCell.ship.rotation);
                this.checkIfAllSunk();
                if(this.allShipsSunk) {
                    dom.displayWinner(this.player.opponent);
                }
            }
            return true;
        }
        
        dom.displayMissMessage();
        return new Promise((resolve) => {
            dom.stopCellClicks();
            setTimeout(() => {
            dom.displayPassScreen(this.player);
            this.player.isTurn = true;
            this.player.opponent.isTurn = false;
            resolve(false);
        }, "2000");
    });
    };

    receiveRandomAttack() {
        const coordinates = this.generateRandomCoordinates();
        const currentCell = this.grid.get(coordinates);

        if(currentCell.isHit) {
            this.receiveRandomAttack();
            return;
        }

       try {
        dom.randomAttack(this.player.playerNumber, coordinates);
        this.triedCoordinates.push(coordinates);
       } catch (error) {
        this.triedCoordinates.push(coordinates);
        dom.displayError(error.msg);
        this.receiveRandomAttack();
       }
    }
}
