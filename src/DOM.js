import Explosion from "./explosion.png";
import Battleship from "./Battleship.svg";
import Carrier from "./Carrier.svg";
import Cruiser from "./Cruiser.svg";
import Destroyer from "./Destroyer.svg";
import Submarine from "./Submarine.svg";

function displayError(msg) {
    const errorSpan = document.querySelector("#error-message");
    errorSpan.textContent = msg;
}

function buildGrid(player) {
    const gridContainer = document.querySelector(".grid-container");
    const { grid } = player.gameboard;
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", `${player.playerNumber}-grid`);
    gridDiv.classList.add("grid");
    gridDiv.classList.add("hidden");

    grid.forEach(cell => {
        const cellDiv = document.createElement("div");
        cellDiv.setAttribute("id", `${player.playerNumber}-${cell.coordinates}`);
        cellDiv.classList.add("cell");
        gridDiv.appendChild(cellDiv);

        cellDiv.addEventListener("click", () => {
            document.querySelector("#error-message").textContent = "";
            try {
                player.gameboard.receiveAttack(cell.coordinates);
            } catch (error) {
                displayError(error.message);
            }
        });
    });

    gridContainer.appendChild(gridDiv);
}

function displayGrid(player) {
    const grid = document.querySelector(`#${player.playerNumber}-grid`);
    grid.classList.remove("hidden");
}

function hideGrid(player) {
    const grid = document.querySelector(`#${player.playerNumber}-grid`);
    grid.classList.add("hidden");
}

function assignShipClass(coordinates) {
    const cell = document.querySelector(`#${coordinates}`);
    cell.classList.add("has-ship");
}

function displayShip(player, shipName, coordinates, rotation) {
    const cell = document.querySelector(`#${coordinates}`);
    cell.classList.add(rotation);
    const ship = new Image();
    if(shipName === "Battleship") ship.src = Battleship;
    if(shipName === "Carrier") ship.src = Carrier;
    if(shipName === "Destroyer") ship.src = Destroyer;
    if(shipName === "Submarine") ship.src = Submarine;
    if(shipName === "Cruiser") ship.src = Cruiser;
    ship.classList.add(shipName);
    cell.appendChild(ship);
}

function removeShip(coordinates) {
    const cell = document.querySelector(`#${coordinates}`);
    cell.classList.remove("has-ship");
}

function displayHit(coordinates) {
    const cell = document.querySelector(`#${coordinates}`);
    const hitMark = document.createElement("span");
    hitMark.classList.add("is-hit");
    cell.appendChild(hitMark);
    cell.classList.add("is-hit");
}

function hitShip(coordinates) {
    const cell = document.querySelector(`#${coordinates}`);
    const explosion = new Image();
    explosion.src = Explosion;
    explosion.classList.add("explosion");
    cell.appendChild(explosion);
}

function displayTurnInfo(player, opponent) {
    const turnTextSpan = document.querySelector(".turn-text-span");
    turnTextSpan.textContent = player.name;

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
    const gameoverContainer = document.querySelector(".gameover-container");
    const gameoverTextSpan = document.querySelector(".gameover-text-span");
    const playAgainButton = document.querySelector(".play-again-button");

    gameoverTextSpan.textContent = player.name;

    playAgainButton.addEventListener("click", () => {
        location.reload();
    });

    gameoverContainer.classList.remove("hidden");
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
};