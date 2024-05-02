/*This program uses recursion to perform binary search
 * *By Venika Sem
 * *@version 1.0
 * *@since Feb-2024
 * */

import { createPrompt } from 'bun-promptx'

// binary search function
function binarySearch(userArray: Array<number>, userNum: number, lowIndex: number, hihgIndex: number) {
    // find midIndex
    let midIndex = Math.floor((lowIndex + hihgIndex) / 2)

    // check  number found
    if (userArray[midIndex] == userNum) {
        return midIndex
    } else if (userArray[midIndex] < userNum) {
        return binarySearch(userArray, userNum, midIndex + 1, hihgIndex)
    } else if (userArray[midIndex] > userNum) {
        return binarySearch(userArray, userNum, lowIndex, midIndex - 1)
    } else {
        return -1
    }
}

// initialise array
const userArray: number[] = []

// add numbers to array
for (let counter = 0; counter < 250; counter++) {
    userArray[counter] = Math.floor(Math.random() * 999)
}

// sort the array low to high
userArray.sort((a, b) => a - b)
console.log(`Sorted list of numbers:`)

// print the array. join separates them by commas
console.log(userArray.join(", "))

// get user input
const userInput = createPrompt("\nWhat number are you searching for (integer between 0 and 999): ")
let inputNumber = parseInt(userInput.value)

// make sure the user input a number in the right range
if (inputNumber < 0 || inputNumber > 999) {
    console.log("\n-1")
    process.exit()
}

// search for the number
let searchResult = binarySearch(userArray, inputNumber, 0, userArray.length - 1)
console.log(`\nYour number is in index: ${searchResult}`)

console.log("\nDone.")
