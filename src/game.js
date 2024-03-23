import "./style.css";
import Gameboard from "./gameboard.js";
import Player from "./player.js";
import * as dom from "./DOM.js";

function takeTurn(player1, player2) {
    if(player1.gameboard.allShipsSunk || player2.gameboard.allShipsSunk) {
        dom.displayWinner(player1);
        return;
    }
    
    let player;
    let opponent;
    if(player1.isTurn) {
        player = player1;
        opponent= player2;
    } else {
        player = player2;
        opponent = player1;
    }
    dom.displayTurnInfo(player, opponent);
    dom.hideGrid(player);
    dom.displayGrid(opponent);
    dom.hideSunkShipsList(player);
    dom.displaySunkShipsList(opponent);
}

function startGame(player1, player2, random = true) {
    player1.isTurn = true;
    player1.playerNumber = "player1";
    player2.playerNumber = "player2";
    player1.opponent = player2;
    player2.opponent = player1;
    player1.gameboard = new Gameboard(player1);
    player2.gameboard = new Gameboard(player2);
    dom.buildGrid(player1);
    dom.buildGrid(player2);

    if(random) {
        player1.gameboard.randomShipPlacement();
        player2.gameboard.randomShipPlacement();
    }

    window.addEventListener("click", () => {
        takeTurn(player1, player2);
    });
    
    takeTurn(player1, player2);
}


window.addEventListener("load", () => {
    dom.startGame(startGame);
});