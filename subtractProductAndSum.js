// Given an integer number n, return the difference between the product of its digits and the sum of it digits

// ----- PseudoCode -----
// Establish variable for product of all digits
// Establish variable for sum of all digits
// Create a while loop that will iterate as long as n is greater than 0
// use modulus -- will calculate remainder.
// add to variable
// multiply to variable
// Divide input by ten and round down
// Return product minus sum

//  ----- Solution 1 -----
const subtractProductAndSum = (n) => {
    let sum = 0;
    let prod = 1;

    while(n > 0) { 
        const mod = n % 10;
        sum += mod;
        prod *= mod;
        n = Math.floor(n / 10) 
    }

    return prod - sum
}

// ----- Solution 2 -----
const subtractProductAndSum = (n) => {
    // Array.from creates a shallow-copied Array instance from an array-like or iterable object
    const digits = Array.from(String(n), Number)
    const sum = digits.reduce((a,b) => a+b)
    const product = digits.reduce((a,b) => a*b)
    return product - sum
}

console.log(subtractProductAndSum())
