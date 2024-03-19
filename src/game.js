import "./style.css";
import Gameboard from "./gameboard.js";
import Player from "./player.js";
import * as dom from "./DOM.js";

function takeTurn(player, opponent) {
    dom.displayTurnInfo(player);
    dom.hideGrid(player);
    dom.displayGrid(opponent);
}

function startGame() {
    const player1 = new Player("Josh");
    player1.playerNumber = "player1";
    const player2 = new Player("Computer");
    player2.playerNumber = "player2";
    player1.gameboard = new Gameboard(player1);
    player2.gameboard = new Gameboard(player2);
    dom.buildGrid(player1);
    dom.buildGrid(player2);

    player2.gameboard.placeShip("Battleship", 4, "B5", "vertical");
    player2.gameboard.receiveAttack("B5");
    player2.gameboard.receiveAttack("C5");
    
    takeTurn(player1, player2);
}

window.addEventListener("load", () => {
    startGame();
});