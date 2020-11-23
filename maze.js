const board = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`
board.split("\n");
board.split('');

//Creation array multilines

console.log(board)
/*createBlankMaze()*/

for (let sign of board) {
    if (sign != '\n') {
        let boxes = document.createElement("div");
        boxes.className = "box"
        if (sign === '*') {
            boxes.classList.add('wall')
            boxes.style.backgroundColor = "#535252"
        } else if (sign === '.') {
            boxes.classList.add('path')
            boxes.style.backgroundColor = "rgb(0,150,150)";
        } else if (sign === 'S') {
            let player = document.createElement("div")
            player.className = 'player'
            boxes.style.backgroundColor = "rgb(250,0,0)"
            boxes.appendChild(player)

        } else if (sign === 'T') {
            let tresor = document.createElement("div")
            tresor.className = 'tresor'
            boxes.style.backgroundColor = "rgb(0,150,150)";
            boxes.appendChild(tresor)
        }
        document.getElementById('maze_container').appendChild(boxes)
    }
}

i = 16
const grid = 13

let x, y;
x = x * grid
y = 14
/* DISPLAY THE KEY PRESSED ON */
document.addEventListener('keydown', logKey);

function logKey(e) {
    let newBox = document.querySelectorAll('.box')
    let playerMove = document.querySelector('.player')

    if (e.keyCode === 37) { // ArrowLeft
        // if class contain wall "*" on fait rien if class contain path ".", then append child to board[y--]
        console.log('Flèche Gauche')

        if (newBox[y - 1].classList.contains('wall') === true) {
            console.log("Tu as un mur à gauche")

        } else if (newBox[y - 1].classList.contains('path') === true) {
            newBox[y - 1].appendChild(playerMove)
            console.log(y)
            y = y - 1
        }


    } else if (e.keyCode === 39) { //ArrowRight
        // if class contain wall "*" on fait rien if class contain ".", then append child to board[(x*13)+y]

        if (newBox[y].classList.contains('wall') === true) {
            console.log("Tu as un mur à droite")
        } else if (newBox[y + 1].classList.contains('path') === true) {
            newBox[y + 1].appendChild(playerMove) //append player to the next div
            console.log(y)
            y = y + 1
        }



    } else if (e.keyCode === 40) { //ArrowBottom
        // if class contain wall "*" on fait rien if class contain ".", then append child to board[(x--)*13 + y]
        console.log('Flèche Bas')


    } else if (e.keyCode === 38) {

        // ArrowUp
        // if class contain wall "*" on fait rien if class contain ".", then append child to board[(x++)*13 + y]
        console.log('Flèche Haut')
    }


    // CONSOLE LOG THE KEY NUMBER 
}