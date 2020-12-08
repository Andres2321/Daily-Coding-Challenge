// You are given a string s that consists of only lowercase english letters. If vowel ('a', 'e', 'i', 'o' and 'u')
// are given a valuse of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.

function countVowelConsonant(string){
const splitString = string.split('')
let result = 0
function vowels(){
    result = result + 1
}
splitString.forEach(letter => {
    console.log(typeof letter)
    switch(letter){
        case 'a': vowels()
        break;
        case 'e':
            vowels()
            break; 
        case 'i':
            vowels()
            break;
        case 'o':
            vowels()
            break;
        case 'u':
            vowels()
            break;
        default:
            result = result + 2
    }
})

console.log(result)

}

const string= 'abcde'
countVowelConsonant(string);


// ALternate solution

function countLetters(string){
    const splitL = string.split('')
    let sum = 0
    splitL.reduce((acc,val) =>{
        if( val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u'){
            sum += 1
        } else {
            sum +=2
        }
    })
    return sum
}