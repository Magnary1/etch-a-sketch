
const squares = Array.from(document.getElementsByClassName(`square`)); //puts squares into an array


// setup for cursor down and draw
const all = document.getElementById(`all`)
all.addEventListener(`mousedown`, beginEtch)
all.addEventListener(`mouseup`, stopEtch)
let mouseDown = 0
let mouseUp = 0

function beginEtch(e) {
    mouseDown += 1
    console.log(mouseDown)

}

function stopEtch(e) {

    mouseUp += 1
    console.log(mouseUp)
}
//end setup for cursor down and draw


//if cursor down, square will change color
squares.forEach(square => {

    square.addEventListener(`mouseover`, changeColor)
    square.style.background = `white`


    function changeColor(e) {
        if (mouseUp != mouseDown) {
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
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            else {
                square.style.background = `grey`
            }

        }


    }
})
