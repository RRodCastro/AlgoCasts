// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// n = 3
// row: row-0th (i + j) + 1
// rows = [
//    (0,0), (0,1), (0,2),
//    (1,0), (1,1), (1,2)
//    (2,0), (2,1), (2,2)
//    (3,0), (3,1), (3,2)
//]
//

// n = 4
// row: row-0th (i + j) + 1
// rows = [
//    (0,0), (0,1), (0,2), (0,3),
//    (1,0), (1,1), (1,2), (1,3),
//    (2,0), (2,1), (2,2), (2,3), 
//    (3,0), (3,1), (3,2), (3,3)
//]
//

function matrix(n) {
    const grid = []
    for (let i = 0; i < n; i++) {
        grid.push(new Array(n))
    }
    counter = 1
    startRow = 0
    endRow = n - 1
    startColumn = 0
    endColumn = n - 1

    while (startRow <= endRow && startColumn <= endColumn) {

        // Iterate over columns and startRow 
        for (let i = startColumn; i <= endColumn; i++) {
            grid[startRow][i] = counter
            counter ++
        }
        startRow ++
        // ITerate over rows and endColumn
        for (let i = startRow; i <= endRow; i++) {
            grid[i][endColumn] = counter
            counter ++
        }
        endColumn --
        // Iterate over columns and endRow
        for (let i = endColumn; i >= startColumn; i--) {
            grid[endRow][i] = counter
            counter ++
        }
        endRow --
        // ITerate over rows and startColumn
        for (let i = endRow; i >= startRow; i--) {
            grid[i][startColumn] = counter
            counter ++
        }
        startColumn ++

    }

    return grid

}

module.exports = matrix;
