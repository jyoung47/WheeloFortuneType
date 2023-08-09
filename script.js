let total = 0;
const words = ["Adventure", "Technology", "Happiness", "Internet", "Javascript", "HTML", "Mountain", "Pool", "King", "Dreadlocks"];
let randomWord = words[Math.floor(Math.random() * words.length)];
const wordDisplay = document.getElementById("word");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitLetter");
const guessesDisplay = document.getElementById("guesses");
let currentWord = randomWord.split('');
let guessedLetters = [];
let incorrectGuesses = 0;


wordDisplay.textContent = currentWord.map(() => '_').join(' ');

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



function updateGuessesDisplay() {
    console.log(guessedLetters)
  guessesDisplay.textContent = `Incorrect guesses: ${guessedLetters.join()}`;
}

function checkWin() {
  if (!currentWord.includes('_')) {
    alert('Congratulations! You won!');
    resetGame();
  } else if (incorrectGuesses === 6) {
    alert(`Game over! The word was "${randomWord}"`);
    resetGame();
  }
}

function guess() {
  const letter = guessInput.value.toLowerCase();
  
  if (letter && guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    
    if (!currentWord.includes(letter)) {
      incorrectGuesses++;
    }
    console.log(guessedLetters)
    updateWordDisplay();
    updateGuessesDisplay();
    
     }
  
  guessInput.value = '';
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
  const amount = Math.floor(Math.random() * 1000) + 10;
  total += amount;
  //if
  const resultElement = document.getElementById("amount-display");
  resultElement.textContent = `$${amount}`;
  const totalElement = document.getElementById("total-display");
  totalElement.textContent = `$${total}`;
}
