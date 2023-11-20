//                                   Pixel Art Game

//                      Variables creating the divs and the outline 
let container = document.getElementById('container')
let canvas = document.getElementById('canvas')
let colorInput = document.getElementById('colorInput')
let clearButton = document.getElementById('clearButton')

//                                  container specs
if (container) {
container.style.height = "700px"
container.style.width = "700px"
container.style.backgroundColor = "Bisque"
container.style.border = '3px solid black'
container.className = 'container'
}

//                                   canvass specs
if (canvas) {
canvas.style.height = '600px'
canvas.style.width = '600px'
canvas.style.backgroundColor = 'BurlyWood'
canvas.style.border = '1.5px solid black'
}

//                  variable creating the board that holds all pixels
let board = document.createElement('div')

//board specs
if (board) {
board.style.height = '580px'
board.style.width = '580px'
board.style.backgroundColor = 'white'
board.style.display = "flex"
board.style.flexWrap = "wrap"
board.className - "board"
}
canvas.appendChild(board)

// making all the pixels
for (let i = 0; i < 1600; i++) {
    let pixel = document.createElement('div')
    pixel.style.backgroundColor = 'white'
    pixel.style.height = '2.5%'
    pixel.style.width = '2.5%'
    pixel.style.outline = '1px solid silver'
    board.appendChild(pixel)
}

//                             Creating more color choices
function one() {
    let one = document.createElement('div')
    container.appendChild(one)
    one.style.height = '40px'
    one.style.width = '40px'
    one.style.backgroundColor = 'red'
    one.className = 'one'
    one.style.outline = "3px dashed black"
    one.addEventListener('click', function() {
        colorInput.value = '#FF0000'
    } )
}
one() 

function two() {
    let one = document.createElement('div')
    container.appendChild(one)
    one.style.height = '40px'
    one.style.width = '40px'
    one.style.backgroundColor = 'purple'
    one.className = 'two'
    one.style.outline = "3px dashed black"
    one.addEventListener('click', function() {
        colorInput.value = '#800080'
    } )
}
two() 

function three() {
    let one = document.createElement('div')
    container.appendChild(one)
    one.style.height = '40px'
    one.style.width = '40px'
    one.style.backgroundColor = 'yellow'
    one.className = 'three'
    one.style.outline = "3px dashed black"
    one.addEventListener('click', function() {
        colorInput.value = '#FFFF00'
    } )
}
three()

function four() {
    let one = document.createElement('div')
    container.appendChild(one)
    one.style.height = '40px'
    one.style.width = '40px'
    one.style.backgroundColor = 'green'
    one.className = 'four'
    one.style.outline = "3px dashed black"
    one.addEventListener('click', function() {
        colorInput.value = '#008000'
    } )
}
four() 

function five() {
    let one = document.createElement('div')
    container.appendChild(one)
    one.style.height = '40px'
    one.style.width = '40px'
    one.style.backgroundColor = 'blue'
    one.className = 'five'
    one.style.outline = "3px dashed black"
    one.addEventListener('click', function() {
        colorInput.value = '#0000FF'
    } )
}
five() 
 

//                      selecting all the divs within the board div
let pixels = board.querySelectorAll('div');

//                          function that colors in the pixels
pixels.forEach(pixel => {
    pixel.addEventListener('click', function() {
        this.style.backgroundColor = colorInput.value; 
    });
});

//                                 clear button function
function clearPixels() {
    pixels.forEach(pixel =>
        pixel.style.backgroundColor = 'white')
}

clearButton.addEventListener('click', clearPixels)

//                                  creating earaser 

function eraser() {
    let eraser = document.createElement('div')
    container.appendChild(eraser)
    eraser.style.height = '20px'
    eraser.style.width = '43px'
    eraser.style.backgroundColor = 'pink'
    eraser.className = 'eraser'
    eraser.style.outline = "1.5px dashed black"
    eraser.textContent = "Eraser"
    eraser.addEventListener('click', function() {
        colorInput.value = '#ffffff'
    })
}
eraser()

