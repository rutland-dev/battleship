import Gameboard from "./gameboard.js";

export default class Player {
    constructor(name) {
        this.name = name;
        this.playerNumber = null;
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