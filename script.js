let total = 0;
let amount = 0;
const words = ["adventure", "technology", "happiness", "internet", "javascript", "html", "mountain", "pool", "king", "dreadlocks"];
let randomWord = words[Math.floor(Math.random() * words.length)];
const wordDisplay = document.getElementById("word");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitLetter");
const spinBtn = document.getElementById("onclick")
const guessesDisplay = document.getElementById("guesses");
let currentWord = randomWord.split('');
let guessedLetters = [];
let incorrectGuesses = 0;

wordDisplay.textContent = currentWord.map(() => '_').join(' '); 

submitBtn.disabled = true

submitBtn.addEventListener("click", function() {
    const guess = guessInput.value;
    handleInput(guess);
});

function handleInput() {
    guess();
}

function updateWordDisplay() {
  wordDisplay.textContent = currentWord.map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
}

function checkWin(currentWord, guessedLetters) {
  for (let i = 0; i < currentWord.length; i++) {
    if (!guessedLetters.includes(currentWord[i])) {
      return false;
    }
  }
  return true;
}

function updateWordDisplay() {
  wordDisplay.textContent = currentWord.map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
  if (checkWin(currentWord, guessedLetters)) {
    wordDisplay.textContent = "You Win!";
    submitBtn.disabled = true;
  }
  updateGuessesDisplay();
}

function guess() {
  const letter = guessInput.value.toLowerCase();
  
  if (letter && guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    
    if (!currentWord.includes(letter)) {
      incorrectGuesses++; 
    }
    console.log(guessedLetters);

    let result = amount;
  
    if (randomWord.indexOf(guessInput.value) >-1) {
      result = amount + total;
    } else {
      result = total - amount;
    }
    
    total = result;

    const totalElement = document.getElementById("total-display");
    totalElement.textContent = `$${total}`;
    
    if (total < 0) {
      alert("Letter is incorrect and You're Bankrupt! Sorry, You lose!");
      resetGame();
    } else {
      updateWordDisplay();
      updateGuessesDisplay();
    }
  }
  
  guessInput.value = '';

  submitBtn.disabled = true

}


function resetGame() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  currentWord = randomWord.split('');
  guessedLetters = [];
  incorrectGuesses = 0;
  updateWordDisplay();
  updateGuessesDisplay();
}

function spin() {
  amount = Math.floor(Math.random() * 100) + 10;
  
  const resultElement = document.getElementById("amount-display");
  resultElement.textContent = `$${amount}`;
  
  submitBtn.disabled = false

}
