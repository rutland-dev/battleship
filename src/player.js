export default class Player {
    constructor(name) {
        this.name = name;
        this.playerNumber = null;
        this.gameboard = null;
        this.isTurn = false;
        this.opponent = null;
        this.availableShipList = [
            {
                name: "Battleship",
                length: 4,
            },
            {
                name: "Carrier",
                length: 5,
            },
            {
                name: "Cruiser",
                length: 3,
            },
            {
                name: "Destroyer",
                length: 2,
            },
            {
                name: "Submarine",
                length: 3,
            },
        ];
    }

    randomAttack(opponentGameboard) {
        const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const coordinates = `${letterArray[Math.floor((Math.random())* 10) - 1]}${parseInt(Math.floor((Math.random()) * 10), 10) + 1}`;

        try {
            opponentGameboard.receiveAttack(coordinates);
        } catch (error) {
            this.randomAttack(opponentGameboard);
        }
    }
}