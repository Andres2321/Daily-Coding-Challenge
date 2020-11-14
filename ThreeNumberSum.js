// Write a function that takes in a nin-empty array of distinct integers and an interger representing a target sum.
// The functions should find all triplets in the array that sum up to the target sum and return a two-dimensional 
// array of all these triplets. The number in each triplet should be ordered in ascending order, and the triplets
// themselves should be ordered in scending order with the respect to the numbers they hold. If no three numbers sum up to the target
// sum, the function should return an empty array.

// ----- Pseudocode -----
// Create three different variable that hold array and join them in conclusion of function
// Create a for loop to iterate through the array.
// Iterate through the array 3 times for every variable?

// SOLUTION 1
const threeNumberSum1 = (array, targetSum) => {
    const sortedArray = array.sort()
    let fI = 0
    let sI = 1 
    let tI = 2
    let count = 0
    let result = []

    while(count < array.length){
        for(const n of array){
            if(n[fI] + n[sI] + n[tI] === targetSum){
                result = n[fI], n[sI], n[tI]
            }
        }
    }

}


// const newArray = [12, 3, 1, 2, -6, 5, -8, 6]
// const target = 0
// console.log(threeNumberSum(newArray, target))

// SOLUTION 2
// Time complexity = O(n^2) | Space complexity = O(n) | Where n is the lenght of the input array.

const threeNumberSum = (array, targetSum) => {
    // sort the array in descending order
    const sortedArray = array.sort((a,b) => a-b)
    // Define a variable to hold arrays of triplets
    let triplets = []

    // Create a for loop that excludes the last index of the array, as this last index will be the pointer for the right variable
    for(let i = 0; i < array.length - 2; i++) {
        // Declare your left variable as 1 index ahead of the current index i
        let left = i + 1
        // Declare your right variable as the last index in the array
        let right = array.length - 1

        // Create a while loop that will not allow our opposite sides to collide ir run past each other
        while(left < right){
            // calculate the current sum using all your variables established
            const currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right]
            // Check whether the current sum of the variables matches the target sum of the function input
            if(currentSum === targetSum) {
                // Push the 3 variables into an array and place that array within the result variable
                triplets.push([sortedArray[i], sortedArray[left], sortedArray[right]])
                // Increase the left side as we found a match
                left ++
                // Decrease the right side as we found a match
                right --
            // If the current sum is smaller than the target sum, we can move our left variable to the right to redeclare to larger number
            } else if(currentSum < targetSum){
                left++
            // If the current sum is greater than the target sum, we can move our right variable to the left to redeclare to a smaller number
            } else if(currentSum > targetSum){
                right --
            }
        }
    }
    // Return the triples variable containing the arrays within.
    return triplets
}

const newArray = [12, 3, 1, 2, -6, 5, -8, 6]
const target = 0
console.log(threeNumberSum(newArray, target))

// SOLUTION 3