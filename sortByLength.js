// Given an array of strings, sort them in the order of increasing length. If two strings have the same lengths, 
// their relative order must be the same as in the initial array


function sorting(array){
    console.log(array.sort((a,b) => a.length - b.length))
}

const test = ['abc', '', 'aaa', 'a', 'zz']
sorting(test)