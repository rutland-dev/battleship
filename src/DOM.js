function buildGrid(player) {
    const gridContainer = document.querySelector(".grid-container");
    const { grid } = player.gameboard;
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", `${player.playerNumber}-grid`);
    gridDiv.classList.add("grid");
    gridDiv.classList.add("hidden");

    grid.forEach(cell => {
        const cellDiv = document.createElement("div");
        cellDiv.setAttribute("id", `${cell.coordinates}`);
        cellDiv.classList.add("cell");
        gridDiv.appendChild(cellDiv);
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

function displayTurnInfo(player) {
    const turnTextSpan = document.querySelector(".turn-text-span");
    turnTextSpan.textContent = player.name;
}

export {
    buildGrid,
    displayGrid,
    displayShip,
    removeShip,
    displayTurnInfo,
    hideGrid,
};