// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split("").reduce((acc, curr) => { acc.unshift(curr); return acc }, []).join("")
    return reversed == str
    // const reversed = str.split("").reverse().join("") 0.5 seconds more!
}


module.exports = palindrome;

 // Using every function => return str.split("").every((ele,index, array) => ele === array.reverse()[index] ) 0.25 seconds better
 // Cleaner approach: return str.split("").every((ele,index, array) => ele === array[str.length - 1 - index] )
