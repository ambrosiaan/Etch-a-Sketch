const gridSize = 600;
const defaultColorBackground = 'rgb(204,250,204)'
const defaultColor = '#ffe5e9'
let eraser = false;
let mouseDown = false;
let rainbowMode = false;
let pixelsVisible = false;
let colorIteration = 256; //Makes it so that the colors in rainbow mode get progressively darker
let shadeColorIteration = 0 //Makes it so that in rainbow mode different color shades alternate. First blue, green, purple, red, orange

const mainContainer = document.querySelector('#mainContainer');
const slider = document.getElementById("pixelSize");

createGrid(20)
window.addEventListener('mousedown', () => mouseDown = true)
window.addEventListener('mouseup', () => mouseDown = false)

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    let numberOfSquares = this.value;
    deleteGrid()
    createGrid(numberOfSquares)
}

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
        item.addEventListener('mouseover', changeTileColor)
        let squareSize = determineSizePerSquare(numberOfSquares)
        item.style.height = `${squareSize}px`;
        item.style.width = `${squareSize}px`;
        if (pixelsVisible) item.classList.add("solid-border");
    })
}

function pencilMode(){
    eraseMode(false)
    rainbowMode = false;
}

function eraseMode(booleanValue){
    eraser = booleanValue
}

function toggleRainbow(){
    eraser = false;
    rainbowMode ? rainbowMode = false : rainbowMode = true;
}

function toggleBorderStyle() {
    if (!pixelsVisible) {
        document.querySelectorAll('.div-grid').forEach(item => {
            item.classList.add("solid-border");
        })
        pixelsVisible = true;
    }
    else {
        document.querySelectorAll('.div-grid').forEach(item => {
            item.classList.remove("solid-border");
        })
        pixelsVisible = false;
    }
}

function randomColor() {
    var o = Math.round, r = Math.random, s = 50;
    if (colorIteration < 25 ) {
        colorIteration = 256; 
        shadeColorIteration++;
    }
    colorIteration--
    let color = returnColorShade(shadeColorIteration % 5, o,r,s);
    console.log(color)
    return color
}

function returnColorShade(shadeColorIteration, o,r,s) {
    switch (shadeColorIteration) {
        case 0:
            return 'rgb(' + o((r()*s) + colorIteration + 100) + ',' + o((r()*s) + colorIteration -50) + ',' + o((r()*s) + colorIteration - 50) + ')'; //red shades
        case 1:
            return 'rgb(' + o((r()*s) + colorIteration + 100) + ',' + o((r()*s) + colorIteration + 25) + ',' + o((r()*s) + colorIteration - 150) + ')'; //orange shades
        case 2:
            return 'rgb(' + o((r()*s) + colorIteration) + ',' + o((r()*s) + colorIteration + 50) + ',' + o((r()*s) + colorIteration - 50) + ')'; //green shades
        case 3:
            return 'rgb(' + o((r()*s) + colorIteration - 50) + ',' + o((r()*s) + colorIteration) + ',' + o((r()*s) + colorIteration + 50) + ')';  //blue shades
        case 4:
            return 'rgb(' + o((r()*s) + colorIteration + 25) + ',' + o((r()*s) + colorIteration - 25) + ',' + o((r()*s) + colorIteration + 75) + ')'; //purple shades
    }
}

function changeTileColor(e) {
    // if (mouseDown && !eraser) e.target.classList.add('colored')
    // else if(mouseDown && eraser) e.target.classList.remove('colored');
    if (!mouseDown) return;
    if (eraser) {
        e.target.style.backgroundColor = defaultColorBackground;
    }
    else if (rainbowMode) {
        e.target.style.backgroundColor = randomColor()
    }
    else {
        e.target.style.backgroundColor = defaultColor;
    }
}

function deleteGrid() {
    document.querySelectorAll('.column-container').forEach(item => {
        mainContainer.removeChild(item)

    })
}

function resetGrid() {
    document.querySelectorAll('.div-grid').forEach(item => {
        item.style.backgroundColor = defaultColorBackground;
        if (pixelsVisible) item.classList.add("solid-border");
            
    })
}

function determineSizePerSquare(numberOfSquares) {
    return (gridSize / numberOfSquares)
}