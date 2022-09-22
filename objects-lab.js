 const game = {
     title: "Guess the Number!",
     biggestNum: 100,
     smallestNum: 1,
     secretNum: null,
     prevGuesses:[],

     play: function () {
      this.secretNum = 
     Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
     let guess = NaN;

     while (guess !== this.secretNum) {
      guess = this.getGuess ()
      this.prevGuesses.push(guess)
      this.render(guess)
      if (guess === this.secretNum) return
     }
   }, 
  

     getGuess: function () {
      let getGuess = parseInt(prompt(`Guess the number! ${this.title} Enter a guess between ${this.smallestNum} and ${this.biggestNum}. To end game, enter "quit" to exit.`));
      return 
     },

// render: function() {
//   //render usually talks to user
//   // guessed correct incorrect(too high or low)
//   //variable too high or low 
//   //alert 

     render: function(guess){
     if (this.getGuess == this.secretNum) {
      alert(`Congratulations! You guessed the correct number in ${this.prevGuesses.length} guesses!`)
  } else if (guess > this.biggestNum) {
    alert('Your guess ${guess} is too high. Try again!')
  } else if (guess < this.smallestNum) {
    alert('Your guess ${guess} is too low. Try again!')
  }
 },
}


  game.play();