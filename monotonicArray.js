// Write a function that takes in an array of integers and returns a boolean representing whether the array is
// monotonic. An array is said to be monotonic if its elements, fomr the left to the right, 
// are entirely non-increasing or entirely non-decreasing. Non-increasing elements aren't necessarily exclusively
// decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively
// increasing; they simply don't decrease. Note that empty arrays and arrays of one element are monotonic.

// ----- Pseudocode -----
// Iterate through array with a while loop
// define variable for starting point
// define the next variable
// compare them and find their direction

// SOLUTION 1
const isMonotonic = (array) => {
    // Set variable to non-decreasing as true
    let isNonDecreasing = true
    // Set variable to non-increasing as true
    let isNonIncreasing = true

    // Iterate through the array
    for(let i = 1; i < array.length; i++){
        // If index is less than the next index - array is increasing so make isNonDecreasing as false
        if(array[i] < array[i - 1]) isNonDecreasing = false
        // If index is greater than the next index - array is decreasing so make isNonIncreasing as false
        if(array[i] > array[i - 1]) isNonIncreasing = false
    }
    // return whatever variable is true
    return isNonDecreasing || isNonIncreasing
}

const array = [-1,-5,-10,-1100,-1100,-1101,-1102,-9001]
console.log(isMonotonic(array))