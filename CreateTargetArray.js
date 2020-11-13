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





// SOLUTION 1

const createTargetArray = (nums, index) => {
    let result = []
    for (const n of nums) {
        // .shift() is a method that removes the first element from an array and returns that removed element.
        const i = index.shift()
        // .splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
        // result.splice(1 = starting index, 0 = elements to replace -- if 0 then must have velue to replace, n = item to replace with)
        result.splice(i, 0, n)
    }
    return result
}

// const nums1 = [0,1,2,3,4]
// const index2 = [0,1,2,2,1]

// console.log(createTargetArray(nums1,index2))

// SOLUTION 3

const createTargetArray2 = (nums, index) => {
    let target = []
    max = -1

    for(let i = 0; i < index.length; i++){
        if(index[i] <= max){
            for(let j = 0; j < i; j++){
                if(index[i] <= index[j]) index[j]++
                if(index[j] > max) max = index[j]
            }
        }
        max = Math.max(max, index[i])
    }
    for(const i in nums)target[index[i]] = nums[i]
    return target
}

const nums1 = [0,1,2,3,4]
const index2 = [0,1,2,2,1]

console.log(createTargetArray2(nums1,index2))