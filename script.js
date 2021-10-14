
const row1= (document.getElementById(`row-1`))
const squares = Array.from(document.getElementsByClassName(`square`));



// const button = document.getElementsByTagName(`button`)

// button.addEventListener(`click`, resetSquares)

// function resetSquares() {
//     square.style.background = white
// }


// console.log(squares)



squares.forEach(square => {
    square.addEventListener(`click`, changeColor)
    square.style.background = `grey`


    function changeColor(e) {

        if (square.style.backgroundColor === `grey`) {
         square.style.background = `black`
    } else {
        square.style.background = `grey`
    }


    

}})