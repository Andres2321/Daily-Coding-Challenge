// Write afunction that takes in an array of integers and returns the length of the longest peak in the array
// A peak is defined as an adjacent integers in the array that are strictly increasing until they reach a tip,
// at which point they become strictly decreasing. At least three integers are required to form a peak.

// ----- Pseudocode -----
// Find the max variable in the array
// Check the variables around them
// If there are multiple peaks in the array select the one with the most length

const longestPeak = (array) => {
    // Create a variable for the longest peak length
    let longestPeakLength = 0
    // Create a starting point excluding the 0 index because it cannot be a peak
    let i = 1

    // While our starting point is less than the index of the array.............
    while (i < array.length - 1) {
        // Declare the peak variable
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i]
        // If peak is false...
        if(!isPeak){
            // Increase i by 1 integer
            i++
            continue
        }

        let leftIdx = i - 2
        while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
            leftIdx--
        }

        let rightIdx = i + 2
        while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
            rightIdx++
        }

        const currentPeakLength = rightIdx - leftIdx - 1
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength)
        i = rightIdx
    }
    return longestPeakLength;
}
const array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
console.log(longestPeak(array))