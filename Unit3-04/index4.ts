/*This program uses recursion to solve the Towers of Hanoi
 *By Venika Sem
 *@version 1.0
 *@since Feb-2024
*/

import { createPrompt } from 'bun-promptx'

console.log(`Towers of Hanoi program`)

// get user input
const userInput = createPrompt("How many disks would you like in your tower? (1->): ")
    let inputNumber = parseInt(userInput.value)

// function
function towerOfHanoi(inputNumber, source, target, auxiliary) {
    if (inputNumber > 0) {
        // Move n - 1 disks from source to auxiliary, so they are out of the way
        towerOfHanoi(inputNumber - 1, source, auxiliary, target);

        // Move the nth disk from source to target
        console.log('Move disk ' + inputNumber + ' from ' + source + ' to ' + target);

        // Move the n - 1 disks that we left on auxiliary to target
        towerOfHanoi(inputNumber - 1, auxiliary, target, source);
    }
}

console.log("\nDone.")
