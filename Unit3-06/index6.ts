/*This program is a merge sort program
 * *By Venika Sem
 * *@version 1.0
 * *@since Feb-2024
 * */

import { createPrompt } from 'bun-promptx'

/**
 * Sorts an array using the merging sorting algorithm.
 *
 * @param sortArray the array to be sorted
 * @returns the sorted array
 */
function mergeSort(sortArray: number[]): number[] {
  /**
   * Merges two arrays together.
   *
   * @param left the array to the left
   * @param right the array to the right
   * @returns the merged array
   */
  function merge(left: number[], right: number[]): number[] {
    let sortArray: number[] = []

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortArray.push(left.shift())
      } else {
        sortArray.push(right.shift())
      }
    }

    return [...sortArray, ...left, ...right]
  }
  const mid = sortArray.length / 2

  if (sortArray.length < 2) {
    return sortArray
  }

  const left = sortArray.splice(0, mid)
  return merge(mergeSort(left), mergeSort(sortArray))
}

// Create array
const arrayLength = 5
let counter = 0
let array: number[] = []
while (counter < arrayLength) {
  const selectedNumber: number = parseInt(createPrompt(`Enter a number to put at [${counter}]: `).value)
  if (isNaN(selectedNumber)) {
    console.log("Invalid input.")
  } else {
    array.push(selectedNumber)
    counter++
  }
}

// Show unsorted array
console.log(`Unsorted array: ${array}\n`)

// Sort array
console.log(`Sorted array: ${mergeSort(array)}`)

console.log('\nDone.')