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

function displayShip(coordinates) {
    const cell = document.querySelector(`#${coordinates}`);
    cell.classList.add("has-ship");
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
}

function displayTurnInfo(player, opponent) {
    const turnTextSpan = document.querySelector(".turn-text-span");
    turnTextSpan.textContent = player.name;

    const boardInfoContainer = document.querySelector(".board-info-container");
    const boardInfoText = document.createElement("p");
    boardInfoText.textContent = `${opponent.name}'s Board`;

    boardInfoContainer.appendChild(boardInfoText);
}

export {
    buildGrid,
    displayGrid,
    displayShip,
    removeShip,
    displayTurnInfo,
    hideGrid,
    displayHit,
    displayError,
};