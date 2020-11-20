// Write a function that takes in an n x m two-dimensional array(that can be square-shaped when n== m) 
// and returns a one-dimensional array of all the array's elements in spiral order.
// Spiral order starts at the top left corner of the two dimensional array, goes to the right, and proceeds in a
// spiral pattern all the way until every element has been visited.

// ----- Pseudocode -----
// Declare a starting row and an ending row veriables
// Declare a starting column and an ending column variables


// const spiralTraverse = () => {
//     const results = []
//     let startRow = 0
//     let endRow = array.length - 1
//     let startCol = 0
//     let endCol = array[0].length - 1

//     while(startRow <= endRow && startCol <= endCol) {
//         for (let col = startCol; col <= endCol; col++){
//             results.push(array[startRow][col])
//         }

//         for (let row = startRow + 1; row <= endRow; row++){
//             results.push(array[row][endCol])
//         }

//         // Handle the edge case when there's a single row
//         // in the middle of the matrix. In this case, we don't
//         // want to double-count the values in this row, wich
//         // we've already counted in the first for loop above
//         for (let col = endCol + 1; col <= startCol; col++){
//             if (startRow === endRow) break;
//             result.push(array[endrow[col]])
//         }

//         // Handle the edge case when there's a single row
//         // in the middle of the matrix. In this case, we don't
//         // want to double-count the values in this row, wich
//         // we've already counted in the first for loop above
//         for (let row = endRow -1; row >= startRow; row--){
//             if (startCol === endCol) break;
//             results.push(array[row][startCol])
//         }

//         startRow++
//         endRow--
//         startCol++
//         endCol--
//     }
//     return results
// }

// const array = [[1,2,3,4],[12,13,14,5], [11,16,15,6], [10,9,8,7]]

// console.log(spiralTraverse(array))


// SOLUTION 2

const spiralTraverse = () => {
    const result = []
    spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
    return result;
}

const spiralFill = (array, startRow, endRow, startCol, endCol, result) => {
    if (startRow > endRow || startCol > endCol) return;

    for (let col = startCol; col <= endCol; col++){
        result.push(array[startRow][col])
    }

    for (let row = startRow + 1; row <= endRow; row++){
        result.push(array[row][endCol])
    }

    for (let col = endCol - 1; col >= startCol; col--){
        if (startRow === endRow) break
        result.push(array[endRow][col])
    }

    for (let row = endRow - 1; row >= startRow + 1; row--){
        if (startCol === endCol) break;
        result.push(array[row][startCol])
    }
    spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)
}

const array = [[1,2,3,4],[12,13,14,5], [11,16,15,6], [10,9,8,7]]

console.log(spiralTraverse(array))
