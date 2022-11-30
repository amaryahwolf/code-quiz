// Query Selectors
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-cards")
// Global variables


// Create a function to start quiz, hide start page, show question card and call Question function
function startQuiz() {
    startButton.classList.add("hide")
    questionCard.classList.remove("hide")
    nextQuestion()
}

// Create a function to show response result and show next question
function nextQuestion() {

}

// Create a function to check for correct answer
function checkAnswer() {

}





// Create an object to store the components of the question: title and options 

// Create a function to show question

// Display and start timer after clicking start button

// After question response is clicked, display "Right" or "Wrong" depending on response

// If question is answered incorrectly, subtract 5 seconds from timer

// End the game when all questions have been answered or the timer runs out

// Prompt user to save initials and score

// Browser should recall initials and score even when game is closed out of


// Add event listener to start quiz button
startButton.addEventListener("click", startQuiz)

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score