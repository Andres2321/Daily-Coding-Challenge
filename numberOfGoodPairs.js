// Given an array of integers nums
// A pair (i,j), is called good if nums[i]  = nums[j] and i < j
// Return the number of good pairs


// Pseudocode
// Start at 0 index and compare value to other index values.
// Decide whether to use loop or keep track of pointers.
// Keep a counter to keep track of "good" instances. 
// Return counter

const numIdenticalPairs = nums => {
    // Grab a starting point
    let index = 0;
    let next = 1;
    let counter = 0;

    while(index < nums.length){
        if(nums[index] === nums[next]){
            counter++
            next++
        } else {
            next++
        }
        
        if (next === nums.length - 1){
            index++
            next = index + 1
        } 
    }
    return counter
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))


