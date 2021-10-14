

// creating the main outline
const body = document.querySelector(`body`)


// adding the classes


for (i = 0; i < 16; i++) {
    // creates the rows
    const row = document.createElement(`div`)
    row.classList = `row`
    body.appendChild(row)

    // creates the columns
    for (j = 0; j < 16; j++) {
        const squares = document.createElement(`div`)
        squares.classList = `square`
        row.appendChild(squares)
    }
}

const allSquares = Array.from(document.getElementsByClassName(`square`))

console.log(allSquares)

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
