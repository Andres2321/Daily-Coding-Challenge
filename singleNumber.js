// Given a non-empty array of integers nums. Every element appears twice except for ine. Find that single one.
// Follow up-- could you implement a solution with a linear runtine complexity and without using extra memory

// Pseudocode
    // you can loop once and achieve linear runtime O(n). Cannot loop inside loop
    // Cannot use object to store frequency as it would use O(n) space. need O(1)

const arr = [2,2,1]
const arr2 = [4,1,2,1,2]

function singleNumber (nums){
return nums.reduce((prev,curr) => prev ^ curr, 0)
}
// singleNumber(arr)

// Solution with XOR
const singleNumber2 = (nums) =>{
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
        console.log(result)
        result = result^nums[i]
        console.log(result)

    }
    return result
}
// console.log(singleNumber2(arr))


// Solution with Map()
const singleNumber3 = (nums) =>{
    let map = new Map()

    let val = 0

    for (let x of nums) {
        if(map.has(x)){
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x,1)
        }
    }
    console.log(map, 'map')
        for(let [k,v] of map){
            if (map.get(k)===1){
                val = kbreak
            }
        }
        return val
}
// console.log(singleNumber3(arr))

// Solution with Set()
const singleNumber4 = (nums) =>{
    // Creates a new set
    let seen = new Set()
    // for loop with element values from array
    for(const i of nums){
        // add variable if not included in set, deletes if it is found 
        seen.has(i) ? seen.delete(i) : seen.add(i)
    }
    // make the set into an array and select the first element in that array, which is the value who does not repeat
    return Array.from(seen.values())[0]
}

console.log('answer', singleNumber4(arr))


