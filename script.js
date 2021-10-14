

    let size = 16

originalSize() //starts out with 16x16

//CREATING RESET BUTTON

const reset = document.getElementById('reset')
reset.textContent = `CHOOSE THE SIZE   `

reset.addEventListener(`click`, chooseSize)

// adding the classes



function chooseSize() {
    size = prompt(`what is your size`)  // gets L X H

    const rows = Array.from(document.getElementsByClassName(`row`)) //grabs rows and puts into an aray
    rows.forEach(row => row.remove())  // deletes existing rows

    originalSize()

}


function originalSize(e) {

    // creating the main outline
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
            squares.style.height = `${600/size}px` // makes squares fit the 600px dimensions
            squares.style.width = `${600/size}px`  // makes squares fit the 600px dimensions
            row.appendChild(squares)
        }
    }

    const allSquares = Array.from(document.getElementsByClassName(`square`)) //grabs all squares and puts them into an array

    // makes squares change colors
    allSquares.forEach(square => {

        square.addEventListener(`mouseover`, changeColor)
        square.style.background = `white`

        function changeColor(e) {
            // if (mouseUp != mouseDown) {
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
            // }
        }
    })
}