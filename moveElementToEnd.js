// You're given an array of integers and an integer, Write a function that moves all instances of that integer
// in the array to the end of the array and returns the array. The function should return this in place
// (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// ----- Pseudocode -----
// Iterate through the array
// Compare index with toMove value
// If true => erase value using splice from array and append to the end
// if false => continue to the next index


const moveElementToEnd = (array, toMove) => {
    // Declare the starting point index
    let i = 0;
    // Declare the last index of the array
    let j = array.length - 1;

    // While starting index is less than end index...
    while(i < j){
        // While starting index is less than end index and ending index is equal to target integer, move the ending index left 1 index
        while(i < j && array[j] === toMove) j--
        // If the starting index is equal to the target integer, then perform the following helper function swap(i,j,array)
        if(array[i] === toMove) swap(i, j, array);
        // Increase the index of the starting index by 1 to move along the array
        i++
    }
    // return the array
    return array
}

// Helper function
const swap = (i, j, array) => {
    // Temporary variable will be the ending index in the array
    const temp = array[j]
    // Ending index will equal to starting index
    array[j] = array[i]
    // Starting index will equal to temporary variable
    array[i] = temp
}


const array1 = [2,1,2,2,2,3,4,2]
const move = 2
console.log(moveElementToEnd(array1, move))