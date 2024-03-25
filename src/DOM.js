import Explosion from "./explosion.png";
import Battleship from "./Battleship.svg";
import Carrier from "./Carrier.svg";
import Cruiser from "./Cruiser.svg";
import Destroyer from "./Destroyer.svg";
import Submarine from "./Submarine.svg";
import Player from "./player.js";

function displayError(msg) {
    const errorSpan = document.querySelector("#error-message");
    errorSpan.textContent = msg;
}

function buildGrid(player, myFunction, player1, player2) {
    const gridContainer = document.querySelector(".grid-container");
    const { grid } = player.gameboard;
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", `${player.playerNumber}-grid`);
    gridDiv.classList.add("grid");
    gridDiv.classList.add("hidden");

    const miniGridContainer = document.querySelector(".mini-grid-container");
    const miniGridDiv = document.createElement("div");
    miniGridDiv.setAttribute("id", `${player.playerNumber}-mini-grid`);
    miniGridDiv.classList.add("mini-grid");
    miniGridDiv.classList.add("hidden");

    grid.forEach(cell => {
        const cellDiv = document.createElement("div");
        const miniCellDiv = document.createElement("div");

        cellDiv.setAttribute("id", `${player.playerNumber}-${cell.coordinates}`);
        cellDiv.classList.add("cell");

        miniCellDiv.setAttribute("id", `${player.playerNumber}-mini-${cell.coordinates}`);
        miniCellDiv.classList.add("mini-cell");

        gridDiv.appendChild(cellDiv);
        miniGridDiv.appendChild(miniCellDiv);

        cellDiv.addEventListener("click", async () => {
            document.querySelector("#error-message").textContent = "";
            try { 
                await player.gameboard.receiveAttack(cell.coordinates);
            } catch(error) {
                displayError(error.message);
            }
            await myFunction(player1, player2);
        });
    });

    gridContainer.appendChild(gridDiv);
    miniGridContainer.appendChild(miniGridDiv);
}

function stopCellClicks() {
    const grid = document.querySelector(".grid-container");
    grid.setAttribute("style", "pointer-events: none");
}

function allowCellClicks() {
    const grid = document.querySelector(".grid-container");
    grid.removeAttribute("style");
}

function hidePassScreen() {
    const passScreen = document.querySelector(".pass-screen-container");

    passScreen.classList.add("hidden");
}

function displayPassScreen(player) {
    const passScreen = document.querySelector(".pass-screen-container");
    const passTextSpan = document.querySelector(".pass-text-span");
    const passButton = document.createElement("button");
    
    passButton.classList.add("pass-button");
    passButton.textContent = "Done";
    passScreen.appendChild(passButton);
    passButton.addEventListener("click", () => {
        hidePassScreen();
        allowCellClicks();
        passButton.remove();
    });

    passTextSpan.textContent = player.name;

    passScreen.classList.remove("hidden");
}

function displayMissMessage() {
    const turnText = document.querySelector(".turn-text");
    const attackText = document.querySelector(".attack-text");
    turnText.textContent = "Miss!";
    attackText.textContent = "";
}

function displayGrid(player) {
    const grid = document.querySelector(`#${player.playerNumber}-grid`);
    const miniGrid = document.querySelector(`#${player.playerNumber}-mini-grid`);

    grid.classList.remove("hidden");

    if(!miniGrid.classList.contains("hidden")) {
        miniGrid.classList.add("hidden");
    }

}

function hideGrid(player) {
    const grid = document.querySelector(`#${player.playerNumber}-grid`);
    const miniGrid = document.querySelector(`#${player.playerNumber}-mini-grid`);

    grid.classList.add("hidden");

    if(miniGrid.classList.contains("hidden")) {
        miniGrid.classList.remove("hidden");
    }
}

function assignShipClass(player, coordinates) {
    const cell = document.querySelector(`#${player.playerNumber}-${coordinates}`);
    cell.classList.add("has-ship");
}

function displayMiniShip(player, shipName, coordinates, rotation) {
    const miniCell = document.querySelector(`#${player.playerNumber}-mini-${coordinates}`);
    const miniShip = new Image();

    if(shipName === "Battleship") miniShip.src = Battleship;
    if(shipName === "Carrier") miniShip.src = Carrier;
    if(shipName === "Destroyer") miniShip.src = Destroyer;
    if(shipName === "Submarine") miniShip.src = Submarine;
    if(shipName === "Cruiser") miniShip.src = Cruiser;

    miniShip.classList.add(shipName);
    miniShip.classList.add(rotation);
    miniShip.classList.add("mini-ship");

    miniCell.appendChild(miniShip);
}

function displayShip(player, shipName, coordinates, rotation) {
    const cell = document.querySelector(`#${coordinates}`);
    const ship = new Image();
    if(shipName === "Battleship") ship.src = Battleship;
    if(shipName === "Carrier") ship.src = Carrier;
    if(shipName === "Destroyer") ship.src = Destroyer;
    if(shipName === "Submarine") ship.src = Submarine;
    if(shipName === "Cruiser") ship.src = Cruiser;
    ship.classList.add(shipName);
    cell.classList.add(rotation);
    cell.appendChild(ship);
}

function removeShip(coordinates) {
    const cell = document.querySelector(`#${coordinates}`);
    cell.classList.remove("has-ship");
}

function displayHit(player, coordinates) {
    const cell = document.querySelector(`#${player.playerNumber}-${coordinates}`);
    const miniCell = document.querySelector(`#${player.playerNumber}-mini-${coordinates}`);
    const hitMark = document.createElement("span");
    const miniHitMark = document.createElement("span");
    miniHitMark.classList.add("mini-is-hit");
    hitMark.classList.add("is-hit");
    cell.appendChild(hitMark);
    cell.classList.add("is-hit");
    miniCell.appendChild(miniHitMark);
}

function hitShip(player, coordinates) {
    const cell = document.querySelector(`#${player.playerNumber}-${coordinates}`);
    const miniCell = document.querySelector(`#${player.playerNumber}-mini-${coordinates}`);

    const explosion = new Image();
    explosion.src = Explosion;
    explosion.classList.add("explosion");

    const miniExplosion = new Image();
    miniExplosion.src = Explosion;
    miniExplosion.classList.add("mini-explosion");

    cell.appendChild(explosion);
    miniCell.appendChild(miniExplosion);
}

function displayTurnInfo(player, opponent) {
    const turnText = document.querySelector(".turn-text");
    const attackText = document.querySelector(".attack-text");

    attackText.textContent = "Attack a Square!";
    turnText.textContent = `${player.name}'s Turn!`;

    const boardInfoContainer = document.querySelector(".board-info-container");
    boardInfoContainer.replaceChildren();
    const boardInfoText = document.createElement("p");
    boardInfoText.textContent = `${opponent.name}'s Board`;

    boardInfoContainer.appendChild(boardInfoText);
}

function sinkShip(player, ship) {
    const sunkShipContainer = document.querySelector(`#${player.playerNumber}-sunk-ships-container`);
    const sunkShipList = document.querySelector(`#${player.playerNumber}-sunk-ships-list`);
    sunkShipContainer.appendChild(sunkShipList);

    const sunkShip = document.createElement("li");
    sunkShip.textContent = ship.name;
    sunkShipList.appendChild(sunkShip);
}

function hideSunkShipsList(player) {
    const sunkShipContainer = document.querySelector(`#${player.playerNumber}-sunk-ships-container`);
    sunkShipContainer.classList.add("hidden");
}

function displaySunkShipsList(player) {
    const sunkShipContainer = document.querySelector(`#${player.playerNumber}-sunk-ships-container`);
    sunkShipContainer.classList.remove("hidden");
}

function displayWinner(player) {
    console.log(player.name);
    const gameoverContainer = document.querySelector(".gameover-container");
    const gameoverTextSpan = document.querySelector(".gameover-text-span");
    const playAgainButton = document.querySelector(".play-again-button");

    gameoverTextSpan.textContent = player.name;

    playAgainButton.addEventListener("click", () => {
        location.reload();
    });

    gameoverContainer.classList.remove("hidden");
}

function startGame(myFunction) {
    const randomButton = document.querySelector(".play-random-button");
    const chooseButton = document.querySelector(".play-choose-button");
    const player1Input = document.querySelector("#player1-input");
    const player2Input = document.querySelector("#player2-input");
    const startMenuContainer = document.querySelector(".start-menu-container");

    

    randomButton.addEventListener("click", () => {
        const player1 = new Player(player1Input.value);
        let player2;
        if(player2Input.value === "") {
            player2 = new Player("Computer");
        } else {
            player2 = new Player(player2Input.value);
        }

        startMenuContainer.classList.add("hidden");
        myFunction(player1, player2);
    });

    chooseButton.addEventListener("click", () => {
        const player1 = new Player(player1Input.value);
        let player2;
        if(player2Input.value === "") {
            player2 = new Player("Computer");
        } else {
            player2 = new Player(player2Input.value);
        }

        myFunction(player1, player2, false);
        startMenuContainer.classList.add("hidden");
    });
}

function displayPlaceableShip(player) {
    const shipFrame = document.querySelector(".ship-image-frame");
    const shipName = player.availableShipList.shift().name;
    const placeShipText = document.querySelector(".place-ship-text");
    const rotateShipButton = document.querySelector(".rotate-ship-button");

    const ship = new Image();
    if(shipName === "Battleship") ship.src = Battleship;
    if(shipName === "Carrier") ship.src = Carrier;
    if(shipName === "Destroyer") ship.src = Destroyer;
    if(shipName === "Submarine") ship.src = Submarine;
    if(shipName === "Cruiser") ship.src = Cruiser;

    ship.classList.add(shipName);
    shipFrame.classList.add("horizontal");

    placeShipText.textContent = shipName;

    rotateShipButton.addEventListener("click", () => {
        if(shipFrame.classList.contains("horizontal")) {
            shipFrame.classList.remove("horizontal");
            shipFrame.classList.add("vertical");
        } else {
            shipFrame.classList.remove("vertical");
            shipFrame.classList.add("horizontal");
        }
    });

    // Implement drag and drop later

    shipFrame.appendChild(ship);

}

function displayPlaceShipMenu(player) {
    const instructionsContainer = document.querySelector(".instructions-container");
    const availableShipsContainer = document.querySelector(".available-ships-container");
    const instructionsPlayerName = document.querySelector(".instructions-player-name");

    instructionsPlayerName.textContent = player.name;

    instructionsContainer.classList.remove("hidden");
    availableShipsContainer.classList.remove("hidden");

    displayPlaceableShip(player);
}

function randomAttack(playerNumber, coordinates) {
    setTimeout(() => {
        const cellDiv = document.querySelector(`#${playerNumber}-${coordinates}`);
        cellDiv.click();
    }, 500);
}

export {
    buildGrid,
    displayGrid,
    assignShipClass,
    removeShip,
    displayTurnInfo,
    hideGrid,
    displayHit,
    displayError,
    sinkShip,
    hideSunkShipsList,
    displaySunkShipsList,
    displayWinner,
    hitShip,
    displayShip,
    startGame,
    displayPlaceShipMenu,
    displayPlaceableShip,
    displayPassScreen,
    hidePassScreen,
    displayMissMessage,
    randomAttack,
    stopCellClicks,
    displayMiniShip,
};