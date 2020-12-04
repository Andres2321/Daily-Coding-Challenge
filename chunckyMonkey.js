// Write a function that splits an array (first argument) into grouos the length of size (second argument) and returns
// them as a two-dimensional array

function chunckyMonkey(values, size){
    const result = []
    let test = values.splice(0, size)
    result.push(test, values)
    console.log(result)
    return result
}

chunckyMonkey([1,2,3,4,5], 3)