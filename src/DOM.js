function displayGrid(player) {
    const gridContainer = document.querySelector(".grid-container");
    const { grid } = player.gameboard;
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", `${player.playerNumber}-grid`);
    gridDiv.classList.add("grid");

    grid.forEach(cell => {
        const cellDiv = document.createElement("div");
        cellDiv.setAttribute("id", `${cell.coordinates}`);
        cellDiv.classList.add("cell");
        gridDiv.appendChild(cellDiv);
    });

    gridContainer.appendChild(gridDiv);
}

export {
    displayGrid,
};