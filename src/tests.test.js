import Ship from "./ship";

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
