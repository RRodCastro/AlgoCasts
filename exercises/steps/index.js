// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 3: Recursive Solution


function steps(n, row=0, newString = "") {
    if (n == row ) {
      return; 
    }
    if (newString.length == n){
      console.log(newString)
      return steps(n, row+1, "")
    }
    newString += newString.length <= row ? '#' : ' '
    steps(n, row, newString)
  }

module.exports = steps;


// Solution 1: with repeet:

// function steps(n) {
//     for (let i =1; i <= n; i++) {console.log('#'.repeat(i) + ' '.repeat(n- i))}
// }


// Solution 2: without array functions
// function steps(n) {
//     for (let i =1; i <= n; i++) {
//         let newString = ""
//         for (let j= 1; j<= n; j++){
//             if (j <= i){
//                 newString += '#'
//             }else {
//                 newString += ' '
//             }
//         }
//         console.log(newString)
// 
//     }
// }

