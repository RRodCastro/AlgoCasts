// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const dict = {}
    let maxChar = ""
    for(let char of str){
        if (!dict[char]){
            if (maxChar == "") {
                maxChar = char
            }
            dict[char] = 1
        }
        else {
            dict[char]++
            if (dict[char] == Math.max(...Object.values(dict) )){
                maxChar = char
            }
        }
    }
    return maxChar

}

module.exports = maxChar;

//// first solution 
// function maxChar(str) {
//     const dict = {}
//     let maxChar = ""
//     for(let char of str){
//         if (!dict[char]){
//             if (maxChar == "") {
//                 maxChar = char
//             }
//             dict[char] = 1
//         }
//         else {
//             dict[char]++
//             if (dict[char] == Math.max(...Object.values(dict) )){
//                 maxChar = char
//             }
//         }
//     }
//     return maxChar
// 
// }
// 