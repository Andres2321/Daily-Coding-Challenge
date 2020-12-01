// You are givenan m x n integer grid  accounts[i][j] is the amount of the ith customer has in the jth bank. Return
// the wealth the the richest customer has. A customer's wealth si the amount of money they have in all their bank account.
// The richest customer is the customer that has the maximum wealth.

// Pseudocode
    // traverse array with for loop
    // for every index(array) sum up all values
    // work on a function that takes in an array and adds all values
    // return the array? integer? 


    function richest(numbers){
        const length = numbers.length
        for (let i = 0; i < length; i++) {
            // console.log(numbers[i])
            const condenced = addNumbers(numbers[i])
            // console.log('ending sum:', condenced)
            numbers[i] = condenced
            console.log('current value: ',numbers[i], 'Ending sum: ', condenced)
        }
        numbers.sort((a,b) =>  a - b)
        const maxWealth = numbers.length - 1
        console.log('Wealths: ', numbers, 'Max Wealth Index: ', maxWealth, 'Max Wealth value: ', numbers[maxWealth]) 
    }

    function addNumbers(array){
        const length = array.length
        let result = 0
        for (let i = 0; i < length; i++) {
            result += array[i]
        }
        return result
    }

    const numbers = [[1,3,2],[4,3,4],[2,6,1],[2]]
    richest(numbers)

