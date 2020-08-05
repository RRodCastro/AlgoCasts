// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 2: Sorting arrays
function cleanString(string) {
    return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)

} 

module.exports = anagrams;

// Solution 1: Using a createDict function and .every to compare
// function createDict(string) {
//     const dict = {}
//     for (let char of string.replace(/[^\w]/g, "").toLowerCase() ){
//         dict[char] = dict[char] + 1 || 1
//     }
//     return dict
// }
// function anagrams(stringA, stringB) {
//     const charMapA = createDict(stringA)
//     const charMapB = createDict(stringB)
//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
//         return false
//     }
//     
//     return Object.keys(charMapA).every((element) => charMapA[element] === charMapB[element])  
// }
//  