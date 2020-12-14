function extractEachKth(nums, index){
    return nums.filter(num => num % index !== 0)
}

const array = [1,2,3,4,5,6,7,8,9,10]
extractEachKth(array, 3)