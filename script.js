
let size = 16
originalSize() //starts out with 16x16 and rainbow colors
let makeRainbowON = true;
let makeTwoColorsON = false
//CREATING RESET BUTTON

const reset = document.getElementById('reset')
reset.textContent = `CHOOSE THE SIZE   `
reset.addEventListener(`click`, chooseSize)

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


function chooseSize() {
    size = prompt(`what is your size`)  // gets L X H

    const rows = Array.from(document.getElementsByClassName(`row`)) //grabs rows and puts into an aray
    rows.forEach(row => row.remove())  // deletes existing rows

    originalSize()

}





const twoColors = document.getElementById('twoColors')
twoColors.addEventListener(`click`, changeColors)


function changeColors(e) {
    const rows = Array.from(document.getElementsByClassName(`row`)) //grabs rows and puts into an aray
    rows.forEach(row => row.remove())  // deletes existing rows

    originalSize()
    makeTwoColors()
}

makeRainbow() //makes page start out as rainbow

function makeRainbow() {
    makeRainbowON = true
    makeTwoColorsON = false
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
    makeTwoColorsON = true

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