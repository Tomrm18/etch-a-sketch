const gridContainer = document.querySelector("#grid-container")
const resetButton = document.querySelector('#reset')

window.addEventListener('load', setDefaultGrid);
resetButton.addEventListener('click', changeGridSize);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}


function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', randColour);
    gridContainer.appendChild(gridElement);
  }
}


function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
}

function changeGridSize() {
  let newSize = prompt('What is the new size of the grid?')

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (!newSize || newSize > 64 || Number.isNaN(newSize)) {
      alert('Enter a size between 1-64')
      changeSize();
    }
    else {
      clearGrid();
      setGridSize(newSize)
      fillGrid(newSize);
    }
  }
}



function randColour(e) {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}