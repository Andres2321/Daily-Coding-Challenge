//  Add all even numbers to a given fibonacci integer.

function sumOddFibonacciNumber(num){
    if(num <= 1) {
        return 1
    }

    const x = sumOddFibonacciNumber(num - 1) + sumOddFibonacciNumber(num - 2)
    return x
}


console.log(sumOddFibonacciNumber(4))