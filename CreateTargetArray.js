// Given two array of integers nums and index. Your task is to create target array under the following rules:
// 1. Initially target array is empty
// 2. From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array
// 3. repeat the prvious step until there are no more elements to read in nums and index.
// Return the target array

// ----- Pseudocode -----
// Create a blank array pointer
// create a length pointer
// iterate through nums and index
// Assign nums according to index


const createTargetArray1 = (nums, index) => {
    const length = nums.length
    const newArray = new Array(length)

    for(let i = 0; i < length; i++){
        newArray[index[i]] = nums[i]
    }
    return newArray
}





// SOLUTION

const createTargetArray = (nums, index) => {
    let result = []
    for (const n of nums) {
        const i = index.shift()
        result.splice(i, 0, n)
    }
    return result
}

const nums1 = [0,1,2,3,4]
const index2 = [0,1,2,2,1]

console.log(createTargetArray(nums1,index2))