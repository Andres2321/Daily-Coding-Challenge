// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array)
// whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number 
// from the first array in the first position. Note that the absolute difference of two integers is the distance 
// between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute
// difference of -5 and -4 is 1. You can assume that there will only be one pair of numbers with the smallest difference.

// ----- Pseudocode -----
// Iterate through the two arrays with loops? Create two variables for starting points in each array
// Sort the arrays in ascending order
// create a variable to keep track of the smallest difference. record array values

// Time and space complexity
// Time = O(Nlog(N) + Mlog(M))
// Space = O(1)

const smallestDifference = (arrayOne, arrayTwo) => {
    // Sort the arrays in ascending manner
    arrayOne.sort((a,b) => a - b)
    // Sort the arrays in ascending manner
    arrayTwo.sort((a,b) => a - b)
    // Variable index for arrayOne starting point
    let indexOne = 0
    // Variable index for arrayTwo starting point
    let indexTwo = 0
    // Track the smallest difference
    let smallest = Infinity
    // Tracks the current difference
    let current = Infinity
    // Tracks the pair that create the smallest difference
    let smallestPair = []

    // while both indexes are smaller than the length of each respective array
    while(indexOne < arrayOne.length && indexTwo < arrayTwo.length){
        // Create variable for first number in arrayOne
        let firstNum = arrayOne[indexOne]
        // Create variable for first number in arrayTwo
        let secondNum = arrayTwo[indexTwo]

        // If the first number in arrayOne is smaller than the second number in arrayTwo...
        if(firstNum < secondNum){
            // current is now the difference between the two numbers
            current = secondNum - firstNum
            // Increase the index for array 1 to make the gap smaller
            indexOne++

            // If the second number in arrayTwo is smaller than the first number in arrayOne...
        }else if (secondNum < firstNum){
            // current is now the difference between the two numbers
            current = firstNum - secondNum
            // Increase the index for array 1 to make the gap smaller
            indexTwo++

        } else {
            // If the loop reaches the ending conclusion, or your values are the same, you have found your smallest difference pair
            return [firstNum, secondNum]
        }

        // if the smalles variable is greater than the current variable...
        if(smallest > current){
            // smallest will be equal to the current variable
            smallest = current
            // smallest pair will include the values that created the smallest difference
            smallestPair = [firstNum, secondNum]
        }
    }
    // return the smallest pair that contains the values within each array
    return smallestPair
}

const array1 = [-1,5,10,20,28,3]
const array2 = [26,124,125,15,17]

console.log(smallestDifference(array1, array2))