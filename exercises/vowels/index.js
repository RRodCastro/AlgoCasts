// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1: Using reduce
function vowels(str) {
    const chars = ["a", "e", "i", "o", "u"]
    return str.split("").reduce((acc, curr) => chars.includes(curr.toLowerCase()) ? acc + 1 : acc , 0 )

}

module.exports = vowels;
