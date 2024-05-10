/*This program uses recursion to solve the Towers of Hanoi
 *By Venika Sem
 *@version 1.0
 *@since Feb-2024
*/

import { createPrompt } from 'bun-promptx'

// tower of hanoi function
function towerOfHanoi(nOfDisk: number, startPeg: number, endPeg: number) {
    const pegNumber = 6
    if (nOfDisk == 1) {
        console.log(`Move disk 1 from peg ${startPeg} to peg ${endPeg}`)
        return
    } else {
        towerOfHanoi(nOfDisk - 1, startPeg, pegNumber - startPeg - endPeg)
        console.log(`Move disk ${nOfDisk} from peg ${startPeg} to peg ${endPeg}`)
        towerOfHanoi(nOfDisk - 1, pegNumber - startPeg - endPeg, endPeg)
    }
}

// get user input
const userInput = createPrompt("How many disks would you like in your tower: ")
let inputNumber = parseInt(userInput.value)

// make sure the user input a number in the right range
if (inputNumber < 0) {
    console.log("\nInput a number over 0.")
    process.exit()
}

// run the tower of hanoi function
const startPeg = 1
const endPeg = 3

towerOfHanoi(inputNumber, startPeg, endPeg)