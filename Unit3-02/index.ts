/*This program ruses recursion to find the fatorial of a number
 * *By Venika Sem
 * *@version 1.0
 * *@since Feb-2024
 * */

import { createPrompt } from 'bun-promptx'

// find factorial of a number using recursion
function factorial(num: number): number {
    if (num == 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

// get user input
const userInput = createPrompt("Enter a number to find the factorial of: ")
let inputNumber = parseInt(userInput.value)

if (inputNumber < 0) {
    console.log("\n-1")
} else {
    console.log(`\n${factorial(inputNumber)}`)
}

console.log("\nDone.")
