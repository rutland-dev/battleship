import Ship from "./ship";
import Cell from "./cell";

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
