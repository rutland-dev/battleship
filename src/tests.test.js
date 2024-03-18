import Ship from "./ship";
import Cell from "./cell";
import Gameboard from "./gameboard";

test("Returns a ship object that matches the example object", () => {
    const example = {
        name: "Destroyer",
        length: 4,
        hits: 0,
        coordinates: null,
        isSunk: false,
    };
    const ship = new Ship("Destroyer", 4);
    expect(ship).toMatchObject(example);
});

test("Attacks ship 4 times and changes isSunk to true", () => {
    const ship = new Ship("Destroyer", 4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);
});

test("Creates a cell object with the coordinates property set to [5, 5]", () => {
    const cell = new Cell([5, 5]);
    const array = [5, 5];
    expect(cell.coordinates).toMatchObject(array);
});

test("Creates a gameboard and assigns alpha-numeric coordinates to each cell in the grid so that grid[0].coordinates is 'A1'", () => {
    const board = new Gameboard("Test");
    expect(board.grid[0].coordinates).toMatch("A1");
});

test("Places a Battleship vertically at B3", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Battleship", 4, "B3", "vertical");
    let coord;
    for(let i = 0; i < gameboard.grid.length; i += 1) {
        if(gameboard.grid[i].coordinates === "E3") {
            coord = gameboard.grid[i];
        }
    }

    expect(coord.hasShip).toBe(true);
});

test("Places a Battleship horizontally at H1", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Battleship", 4, "H1", "horizontal");
    let coord;
    for(let i = 0; i < gameboard.grid.length; i += 1) {
        if(gameboard.grid[i].coordinates === "H4") {
            coord = gameboard.grid[i];
        }
    }

    expect(coord.hasShip).toBe(true);
});

test("Places a Battleship horizontally at A1 and attemps to place a Destroyer vertically at A3, result in an error", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Battleship", 4, "A1", "horizontal");
    expect(() => gameboard.placeShip("Destroyer", 3, "A3", "vertical")).toThrow(Error);
});

test("Attacks a coordinate twice, resulting in an error", () => {
    const gameboard = new Gameboard("Test");
    gameboard.receiveAttack("A1");
    expect(() => gameboard.receiveAttack("A1")).toThrow(Error);
});

test("Attacks a coordinate, resulting in isHit === true", () => {
    const gameboard = new Gameboard("Test");
    gameboard.receiveAttack("A1");
    expect(gameboard.grid[0].isHit).toBe(true);
});

test("Places a ship, attacks and sinks the ship, result in ship.isSunk === true", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Destroyer", 3, "A1", "horizontal");
    gameboard.receiveAttack("A1");
    gameboard.receiveAttack("A2");
    gameboard.receiveAttack("A3");
    expect(gameboard.grid[0].ship.isSunk).toBe(true);
});
