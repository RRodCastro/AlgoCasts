// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       ' '

// Solution 2: Recursive Solution
function pyramid(n, row=0, text ="") {
    if (n == row) {
        return ;
      }
      innerSize = 2 * n - 1
      if (text.length == innerSize) {
        console.log(text)
        return pyramid(n, row + 1)
      }
      centroid = parseInt(innerSize / 2)
      text += text.length >=  centroid - row && text.length <= centroid + row ? "#" : " "
      pyramid(n, row, text)
}

module.exports = pyramid;

// Iterative solutin # 1
// function pyramid(n) {
//     innerSize = 2 * n - 1
//     centroid = parseInt(innerSize / 2)
//     for (let i = 0; i < n; i++) {
//         let text = ""
//         for (let j = 0; j < innerSize; j++) {
//             text += j >= centroid - i && j <= centroid + i ? "#" : " "
//         }
//         console.log(text)
//     }
// }