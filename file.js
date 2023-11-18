//                      Pixel Art Game

// Variables creating the divs and the outline 
let container = document.getElementById('container')
let canvas = document.getElementById('canvas')
let colorInput = document.getElementById('colorInput')
let clearButton = document.getElementById('clearButton')

// container specs
if (container) {
container.style.height = "700px"
container.style.width = "700px"
container.style.backgroundColor = "Peru"
container.style.border = '3px solid black'
}

//canvass specs
if (canvas) {
canvas.style.height = '600px'
canvas.style.width = '600px'
canvas.style.backgroundColor = 'BurlyWood'
canvas.style.border = '1.5px solid black'
}

// variable creating the board that holds all pixels
let board = document.createElement('div')

//board specs
if (board) {
board.style.height = '580px'
board.style.width = '580px'
board.style.backgroundColor = 'white'
board.style.display = "flex"
board.style.flexWrap = "wrap"
}
canvas.appendChild(board)

// making all the pixels
for (let i = 0; i < 1600; i++) {
    let pixel = document.createElement('div')
    pixel.style.backgroundColor = 'white'
    pixel.style.height = '2.5%'
    pixel.style.width = '2.5%'
    pixel.style.outline = '1px solid black'
    board.appendChild(pixel)
}

// selecting all the divs within the board div
let pixels = board.querySelectorAll('div');

// function that colors in the pixels
pixels.forEach(pixel => {
    pixel.addEventListener('click', function() {
        this.style.backgroundColor = colorInput.value; 
    });
});

// clear button function
function clearPixels() {
    pixels.forEach(pixel =>
        pixel.style.backgroundColor = 'white')
}

clearButton.addEventListener('click', clearPixels)
