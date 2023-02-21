const mainContainer = document.querySelector('#mainContainer');
console.log(mainContainer)


function createGrid(numberOfSquares) {

for (let i = 1; i<=numberOfSquares; i++ ){
    const divRowContainer = document.createElement('div');
    divRowContainer.id = `columnContainer${i}`;
    divRowContainer.classList.add('column-container');

    for (let j = 1; j<=numberOfSquares; j++ ){
        const div = document.createElement('div');
        div.classList.add(`div-column-${i}`);
        div.classList.add(`div-row-${j}`);
        div.classList.add(`div-grid`);
        divRowContainer.appendChild(div)
    }
    mainContainer.appendChild(divRowContainer)
    }
}

document.querySelectorAll('.div-grid').forEach(item => {
    item.addEventListener('mouseover', hoverEffect)
})

function hoverEffect(e) {
    console.log(e.target)
    e.target.classList.add('hovered');
}

function chooseAmountOfSquares() {
    let amountOfSquares = prompt("Please choose the amount of squares per side")
    createGrid(amountOfSquares)

}