// Query Selectors
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-cards");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector("#question");
var optionsButtonElement = document.querySelector("answer-buttons");

// Add event listener to start quiz button
startButton.addEventListener("click", startQuiz)

// Global variables
var timer;
var timerCount;
var quizOver;
var index = 0;


//  Create a function to start quiz, hide start page, and call Question function
function startQuiz() {
    quizOver = false;
    timerCount = 90;
    startButton.classList.add("hide");
    questionCard.classList.remove("hide");
    startTimer();
    takeQuiz();
}

function startTimer() {
    timerElement.textContent = timerCount;
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (quizOver && timerCount > 0) {
                clearInterval(timer);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000)
}

 // Array of objects with questions, options, correct answers
    var questions = 
    [
        {
            question: "Are apples red?",
            options: ["Yes", "No", "Maybe", "So"],
            answer: 2
        },
        {
            question: "What is x?",
            options: ["x", "y", "z", "a"],
            answer: 2
        },
        {
            question: "What is y?",
            options: ["x", "y", "z", "a"],
            answer: 2
        },
        {
            question: "What is z?",
            options: ["x", "y", "z", "a"],
            answer: 2
        }
    ];

// Function to render questions onto the pageFunction to render options onto page; use .createElement to create option buttons and question label
function takeQuiz() {
    var questionObject = (questions[index]);
   questionElement.textContent = questionObject.question;
   var optionsArray = questionObject.options;
   document.querySelector("#answer-buttons").innerHTML = ""
   for(var j=0; j < optionsArray.length; j++){
       var btn = document.createElement("button");
       btn.addEventListener("click", checkAnswer);
       btn.classList.add("button")
       if (j === questionObject.answer) {
        btn.dataset.correct = true;
       } else {
        btn.dataset.incorrect = false;
       }
        btn.textContent = optionsArray[j];
       document.querySelector("#answer-buttons").appendChild(btn);
   }
}

// If the button pressed is the same as answer value (index) then it is right, add 1 point and say "Correct", else wrong
function checkAnswer(event) {
   if (event.target.dataset === true) {
    document.querySelector("#correct").textContent = "Correct!"
    console.log("Correct")
   } else {
    timerCount-=10
    document.querySelector("#correct").textContent = "Incorrect!"
   }
//    Increase index by 1 every time it loops back to takeQuiz
    index++    
    if (index < questions.length) {  
   takeQuiz() 
}  else {
    console.log("Game Over")
}
}





// If the option selected is correct, add one point, else add 0 points

// Create an object to store the components of the question: title and options 

// Create a function to show question

// Display and start timer after clicking start button

// After question response is clicked, display "Right" or "Wrong" depending on response

// If question is answered incorrectly, subtract 5 seconds from timer

// End the game when all questions have been answered or the timer runs out

// Prompt user to save initials and score

// Browser should recall initials and score even when game is closed out of
