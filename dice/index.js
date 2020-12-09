
// let dice = document.getElementsByClassName("dice")
// let dot = document.getElementsByClassName('dot')
let createDiv = document.createElement("div") 

function onCLickDice(){
    let randomNumber = Math.ceil(Math.random() * 6)
    console.log(randomNumber, createDiv)
}

onCLickDice()

