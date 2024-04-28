/*This program reverses a string
 * *By Venika Sem
 * *@version 1.0
 * *@since Feb-2024
 * */

// reverse the string using recursion
function reverseString(stringToReverse: string): string {
    if (stringToReverse == '') {
        return ''
    } else {
        let firstChar = stringToReverse[0]
        let restOfString: string = stringToReverse.slice(1)
        return reverseString(restOfString) + firstChar
    }
}

const aString = "recursion"
const anotherString = "racecar"
const thirdString = "hello"
console.log(`The reverse of ${aString} is ${reverseString(aString)}`)
console.log(`The reverse of ${anotherString} is ${reverseString(anotherString)}`)
console.log(`The reverse of ${thirdString} is ${reverseString(thirdString)}`)

console.log("\nDone.")