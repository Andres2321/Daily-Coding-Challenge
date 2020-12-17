function insertDashes(arr){
    const newArray = arr.split(' ')
    let index0 = newArray[0].split('').join('-')
    let index1 = newArray[1].split('').join('-')
    console.log(index0.concat(' ', index1 ))
}



insertDashes('aba caba')