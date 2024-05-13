/*This program uses recursion  with magic squares
 *By Venika Sem
 *@version 1.0
 *@since Feb-2024
*/

// generate magic squares
function genSquare(square: number[], index: number) {
    let numberOfSquares = 0
    let proccessNum = 0

    for (let counter = 0; counter < 9; counter++) {
        square[index] = counter + 1
        proccessNum++
        if (index < 8) {
            genSquare(square, index + 1)
        } else {
            if (isMagic(square) && isRepeat(square)) {
                printSquare(square)
                numberOfSquares++
            }
        }
    }
}

// check if a square is magic
function isMagic(preSquare: number[]) {
    const magicSum = 15
    const row1 = preSquare[0] + preSquare[1] + preSquare[2]
    const row2 = preSquare[3] + preSquare[4] + preSquare[5]
    const row3 = preSquare[6] + preSquare[7] + preSquare[8]
    const col1 = preSquare[0] + preSquare[3] + preSquare[6]
    const col2 = preSquare[1] + preSquare[4] + preSquare[7]
    const col3 = preSquare[2] + preSquare[5] + preSquare[8]
    const diag1 = preSquare[0] + preSquare[4] + preSquare[8]
    const diag2 = preSquare[2] + preSquare[4] + preSquare[6]
    
    return row1 === magicSum && row2 === magicSum && row3 === magicSum && col1 === magicSum && col2 === magicSum && col3 === magicSum && diag1 === magicSum && diag2 === magicSum
}

// checks if square repeats (true if it doesn't, false if it does)
function isRepeat(square: number[]) {
    for (let counter = 0; counter < 9; counter++) {
        for (let counter2 = counter + 1; counter2 < 9; counter2++) {
            if (square[counter] === square[counter2]) {
                return false
            }
        }
    }
    return true
}

// print square
function printSquare(square: number[]) {
    console.log('\n*****')
    console.log(square[0] + ' ' + square[1] + ' ' + square[2])
    console.log(square[3] + ' ' + square[4] + ' ' + square[5])
    console.log(square[6] + ' ' + square[7] + ' ' + square[8])
    console.log('*****\n')
}

// main
const magicSquare = [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log("The magic squares are: ")
genSquare(magicSquare, 0)

console.log("\nDone.")
