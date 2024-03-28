import "./style.css";
import Gameboard from "./gameboard.js";
import * as dom from "./DOM.js";

function takeTurn(player1, player2, random = true) {
    if(player1.gameboard.allShipsSunk || player2.gameboard.allShipsSunk) {
        return;
    }

    if(player1.isTurn) {
        dom.displayTurnInfo(player1, player2);
        dom.displayGrid(player2);
        dom.hideGrid(player1);
        dom.hideSunkShipsList(player1);
        dom.displaySunkShipsList(player2);
    }

    if(player2.isTurn) {
        if(player2.name === "Computer") {
            dom.displayTurnInfo(player2, player1);
            player1.gameboard.receiveRandomAttack();
        }

        if(player2.name !== "Computer") {
            dom.displayTurnInfo(player2, player1);
            dom.displayGrid(player1);
            dom.hideGrid(player2);
            dom.hideSunkShipsList(player2);
            dom.displaySunkShipsList(player1);
        }
    }
}

function startGame(player1, player2, random = true) {
    player1.isTurn = true;
    player1.playerNumber = "player1";
    player2.playerNumber = "player2";
    player1.opponent = player2;
    player2.opponent = player1;
    player1.gameboard = new Gameboard(player1);
    player2.gameboard = new Gameboard(player2);
    dom.buildGrid(player1, takeTurn, player1, player2);
    dom.buildGrid(player2, takeTurn, player1, player2);

    if(random) {
        player1.gameboard.randomShipPlacement();
        player2.gameboard.randomShipPlacement();
    } else {
        dom.displayPlaceShipMenu(player1);
        dom.displayGrid(player1);
    }

    takeTurn(player1, player2);
}


window.addEventListener("load", () => {
    dom.startGame(startGame);
});