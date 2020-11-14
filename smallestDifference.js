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
    arrayOne.sort((a,b) => a - b)
    arrayTwo.sort((a,b) => a - b)
    let indexOne = 0
    let indexTwo = 0
    let smallest = Infinity
    let current = Infinity
    let smallestPair = []

    while(indexOne < arrayOne.length && indexTwo < arrayTwo.length){
        let firstNum = arrayOne[indexOne]
        let secondNum = arrayTwo[indexTwo]

        if(firstNum < secondNum){
            surrent = secondNum - firstNum
            indexOne++
        }else if (secondNum < firstNum){
            current = firstNum - secondNum
            indexTwo++
        } else {
            return [firstNum, secondNum]
        }

        if(smallest > current){
            smallest = current
            smallestPair = [firstNum, secondNum]
        }
    }
    return smallestPair
}

const array1 = [-1,5,10,20,28,3]
const array2 = [26,124,125,15,17]

console.log(smallestDifference(array1, array2))