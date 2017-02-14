'use strict'

export default ()=> {
  const playerNumber = prompt("I'm thinking of a number between 1 and 100. Can you guess the number I'm thinking of?")

    const min = 1
    const max = 100

    let randomNumber =  Math.random() * (max-min) + min;
    let ourNumber  = Math.round(randomNumber)

    if (playerNumber === ourNumber) {
      alert('Congratulations! You guessed the number we were thinking of!')
    } else {
      alert(`Sorry, my number was ${ourNumber}`)
    }
  }
