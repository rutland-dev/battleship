import Ship from "./ship.js";
import Cell from "./cell.js";
import Gameboard from "./gameboard.js";

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

test("Creates a cell object with the coordinates property set to A5", () => {
    const cell = new Cell("A5");
    const coord = "A5";
    expect(cell.coordinates).toMatch(coord);
});

test("Creates a gameboard and assigns alpha-numeric coordinates to each cell in the grid so that cell A1 is an object with coordinates `A1'", () => {
    const board = new Gameboard("Test");
    expect(board.grid.get("A1").coordinates).toMatch("A1");
});

test("Places a Battleship vertically at B3", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Battleship", 4, "B3", "vertical");

    expect(gameboard.grid.get("E3").hasShip).toBe(true);
});

test("Places a Battleship horizontally at H1", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Battleship", 4, "H1", "horizontal");

    expect(gameboard.grid.get("H4").hasShip).toBe(true);
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
    expect(gameboard.grid.get("A1").isHit).toBe(true);
});

test("Places a ship, attacks and sinks the ship, result in ship.isSunk === true", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Destroyer", 3, "A1", "horizontal");
    gameboard.receiveAttack("A1");
    gameboard.receiveAttack("A2");
    gameboard.receiveAttack("A3");
    expect(gameboard.grid.get("A2").ship.isSunk).toBe(true);
});

test("Places a ship on the board and then checks if all ships are sunk, resulting in false", () => {
    const gameboard = new Gameboard("Test");
    gameboard.placeShip("Battleship", 4, "A1", "vertical");
    expect(gameboard.checkIfAllSunk()).toBe(false);
});

test("Places a ship, sinks it, then checks if all ships are sunk, resulting in true", () => {
    const gameboard = new Gameboard;
    gameboard.placeShip("Battleship", 4, "A1", "vertical");
    gameboard.receiveAttack("A1");
    gameboard.receiveAttack("B1");
    gameboard.receiveAttack("C1");
    gameboard.receiveAttack("D1");
    expect(gameboard.checkIfAllSunk()).toBe(true);
});
