const mainContainer = document.querySelector('#mainContainer');
console.log(mainContainer)

for (let i = 1; i<17; i++ ){
    const divRowContainer = document.createElement('div');
    divRowContainer.id = `columnContainer${i}`;
    divRowContainer.classList.add('column-container');

    for (let j = 1; j<17; j++ ){
        const div = document.createElement('div');
        div.classList.add(`div-column-${i}`);
        div.classList.add(`div-row-${j}`);
        div.classList.add(`div-grid`);
        divRowContainer.appendChild(div)
    }
    mainContainer.appendChild(divRowContainer)
}

console.log(mainContainer)