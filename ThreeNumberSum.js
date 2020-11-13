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
// Time complexity = O(n^2) | Space complexity = O(n)

const threeNumberSum = (array, targetSum) => {
    const sortedArray = array.sort((a,b) => a-b)
    let triplets = []

    for(let i = 0; i < array.length - 2; i++) {
        let left = i + 1
        let right = array.length - 1

        while(left < right){
            const currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right]
            if(currentSum === targetSum) {
                triplets.push([sortedArray[i], sortedArray[left], sortedArray[right]])
                left ++
                right --
            } else if(currentSum < targetSum){
                left++
            } else if(currentSum > targetSum){
                right --
            }
        }
    }
    return triplets
}

const newArray = [12, 3, 1, 2, -6, 5, -8, 6]
const target = 0
console.log(threeNumberSum(newArray, target))

// SOLUTION 3