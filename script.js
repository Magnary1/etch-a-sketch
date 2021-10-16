
let size = 16
originalSize() //starts out with 16x16 and rainbow colors
let makeRainbowON = true;
let makeTwoColorsON = false
let makeSlowlyDarkerON = false
// SIZE SLIDER

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

slider.value = size;
output.innerHTML = `${size} x ${size}`;
output.oninput = slider.value;

slider.oninput = function () {
    output.innerHTML = `${this.value} x ${this.value}`;
}

slider.addEventListener(`input`, chooseSize)

// TWO COLOR BUTTON
const twoColorsBtn = document.getElementById('twoColors')
twoColorsBtn.addEventListener(`click`, makeTwoColors)

// SLOWLY DARKER BUTTON
const slowerDarkerBtn = document.getElementById('slowly-darker')
slowerDarkerBtn.addEventListener(`click`, makeSlowlyDarker)


// RAINBOW BUTTON
const rainbowBtn = document.getElementById('rainbow')
rainbowBtn.addEventListener(`click`, makeRainbow)

// CLEAR BUTTON
const clearBtn = document.getElementById('clear')
clearBtn.addEventListener(`click`, resetColors)

// adding the classes

// What to create?

// button to make colors be black/white?




// button to make colors be rainbow

// change "choose size" to be a slider

// possibly make it so you can choose to `click` vs `mouseover`



function originalSize(e) { // creates main outline for grid

    const body = document.querySelector(`body`);
    const container = document.getElementById(`container`);
    for (i = 0; i < size; i++) {
        // creates the rows
        const row = document.createElement(`div`)
        row.classList = `row`
        container.appendChild(row)

        // creates the columns
        for (j = 0; j < size; j++) {
            const squares = document.createElement(`div`)
            squares.classList = `square`
            squares.style.height = `${600 / size}px` // makes squares fit the 600px dimensions
            squares.style.width = `${600 / size}px`  // makes squares fit the 600px dimensions
            row.appendChild(squares)
        }
    }
}

function replaceRows() {
    const rows = Array.from(document.getElementsByClassName(`row`)) //grabs rows and puts into an aray
    rows.forEach(row => row.remove())  // deletes existing rows

    originalSize()
}

function chooseSize(e) {
    size = slider.value  // gets L X H

    setTimeout(() => {replaceRows()  // using setTimeout to help with lag on slider? Does it work?
        checkColorPattern()

        
    }, 200); 
}

function makeRainbow() {
    makeRainbowON = true
    makeTwoColorsON = false
    makeSlowlyDarkerON = false


    replaceRows()
    const allSquares = Array.from(document.getElementsByClassName(`square`)) //grabs all squares and puts them into an array

    allSquares.forEach(square => {

        square.addEventListener(`mouseover`, changeColor)
        square.style.background = `white`

        function changeColor(e) {
            if (square.style.backgroundColor === `white`) {
                square.style.background = `red`
            } else if (square.style.backgroundColor === `red`) {
                square.style.background = `orange`
            } else if (square.style.backgroundColor === `orange`) {
                square.style.background = `yellow`
            } else if (square.style.backgroundColor === `yellow`) {
                square.style.background = `green`
            } else if (square.style.backgroundColor === `green`) {
                square.style.background = `blue`
            } else if (square.style.backgroundColor === `blue`) {
                square.style.background = `violet`
            } else if (square.style.backgroundColor === `violet`) {
                square.style.background = `white`
            }
        }
    })


}

function makeTwoColors() {
    makeRainbowON = false
    makeSlowlyDarkerON = false

    makeTwoColorsON = true

    replaceRows()

    const allSquares = Array.from(document.getElementsByClassName(`square`)) //grabs all squares and puts them into an array

    allSquares.forEach(square => {

        square.addEventListener(`mouseover`, abcd)
        square.style.background = `white`

        function abcd(e) {
            if (square.style.backgroundColor === `white`) {
                square.style.background = `black`
            } else if (square.style.backgroundColor === `black`) {
                square.style.background = `white`
            }
        }
    })
}

function makeSlowlyDarker() {
    makeSlowlyDarkerON = true
    makeRainbowON = false
    makeTwoColorsON = false

    replaceRows()

    const allSquares = Array.from(document.getElementsByClassName(`square`)) //grabs all squares and puts them into an array

    allSquares.forEach(square => {

        square.addEventListener(`mouseover`, abcd)
        square.style.background = `black`
        square.style.opacity = `0`
        let num = .1
        console.log( square.style.opacity === `0` )
        function abcd(e) {

            if (square.style.opacity === `0`) {

                square.style.opacity += num.toFixed(1);
console.log(+square.style.opacity === `.1`)
            } else if (square.style.opacity === `.1`) {
                square.style.opacity += num.toFixed(1);
                console.log( square.style.opacity)

            } else if (square.style.opacity === `.2`) {
                square.style.opacity += num.toFixed(1);
            } else if (square.style.opacity === `.3`) {
                square.style.opacity += num.toFixed(1);
            } else if (square.style.opacity === `.4`) {
                square.style.opacity += num.toFixed(1);
            } else if (square.style.opacity === `.5`) {
                square.style.opacity += num.toFixed(1);
            } 
        
    }})
}

function checkColorPattern() {
    if (makeRainbowON === true) {
        makeRainbow()
    } else if (makeTwoColorsON === true)
        makeTwoColors()
}

function resetColors() {
    replaceRows()
    checkColorPattern()

}

makeRainbow() // IMPORTANT makes page start out as rainbow


