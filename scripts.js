const gridSize = 600;
const mainContainer = document.querySelector('#mainContainer');
console.log(mainContainer)

function createGrid(numberOfSquares) {

    for (let i = 1; i <= numberOfSquares; i++) {
        const divRowContainer = document.createElement('div');
        divRowContainer.id = `columnContainer${i}`;
        divRowContainer.classList.add('column-container');

        for (let j = 1; j <= numberOfSquares; j++) {
            const div = document.createElement('div');
            div.classList.add(`div-column-${i}`);
            div.classList.add(`div-row-${j}`);
            div.classList.add(`div-grid`);
            divRowContainer.appendChild(div)
        }
        mainContainer.appendChild(divRowContainer)
    }
    document.querySelectorAll('.div-grid').forEach(item => {
        item.addEventListener('mouseover', hoverEffect)
        let squareSize = determineSizePerSquare(numberOfSquares)
        item.style.height = `${squareSize}px`;
        item.style.width = `${squareSize}px`;
    })
}

function hoverEffect(e) {
    console.log(e.target)
    e.target.classList.add('hovered');
}

function chooseNumberOfSquares() {
    let numberOfSquares = parseInt(prompt("Please choose the amount of squares per side"))
        
    while (numberOfSquares > 100 || numberOfSquares <= 0 || isNaN(numberOfSquares) ) {
        console.log(numberOfSquares)
        numberOfSquares = parseInt(prompt("Pleaes choose a real number between 1 and 100"))
    }
    
    deleteGrid()
    createGrid(numberOfSquares)
}

function deleteGrid() {
    document.querySelectorAll('.column-container').forEach(item => {
        mainContainer.removeChild(item)

    })
}

function determineSizePerSquare(numberOfSquares) {
    return (gridSize / numberOfSquares)
}