// Givena string S and an integer array indices of the same length.
// The string S will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// return the shuffled string

// ------- pseudocode ------- //
// create a variable that hold the length of the string
// create a variable that creates an array with the definied length variable
// use a for loop to iterate through the indices.



const restoreString = (s, indices) => {
    let length = indices.length
    let array = new Array(length)

    for (let i = 0; i < length; i++) {
        array[indices[i]] = s[i]
    }
    return array.join("")
}


const s = "codeleet"
const indices = [4,5,6,7,0,2,1,3]

console.log(restoreString(s, indices))