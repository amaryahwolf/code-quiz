// Query Selectors
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-cards");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector("#question");
var optionsButtonElement = document.querySelector("answer-buttons");
var points = document.querySelector(".points");
var scoreboardForm = document.querySelector("#initials-form")

// Add event listener to start quiz button
startButton.addEventListener("click", startQuiz)

// Global variables
var timer;
var timerCount;
var quizOver;
var index = 0;
var pointCounter = 0;
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

//  Create a function to start quiz, hide start page, and call Quiz function
function startQuiz() {
    quizOver = false;
    timerCount = 90;
    startButton.classList.add("hide");
    questionCard.classList.remove("hide");
    startTimer();
    takeQuiz();
}

// Create function to make a countdown timer
function startTimer() {
    timerElement.textContent = timerCount;
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (quizOver && timerCount > 0) {
                // clearInterval(timer);
                endQuiz();
            }
        }
        if (timerCount === 0) {
            // clearInterval(timer);
            endQuiz();
        }
    }, 1000)
}
 
// Function to render questions and options onto the page
function takeQuiz() {
    var questionObject = (questions[index]);
   questionElement.textContent = questionObject.question;
   var optionsArray = questionObject.options;
   document.querySelector("#answer-buttons").innerHTML = ""
   for(var i=0; i < optionsArray.length; i++) {
       var btn = document.createElement("button");
       btn.addEventListener("click", checkAnswer);
       btn.classList.add("button")
       if (i === questionObject.answer) {
        btn.dataset.correct = true;
       } else {
        btn.dataset.incorrect = false;
       }
        btn.textContent = optionsArray[i];
       document.querySelector("#answer-buttons").appendChild(btn);
   }
}

// If the button pressed is the same as answer value (index) then it is right, add 1 point and say "Correct", else wrong
function checkAnswer(event) {
   if (event.target.dataset.correct === "true") {
    document.querySelector("#correct").textContent = "Correct!";
    pointCounter+=5;
   } else {
    timerCount-=10;
    document.querySelector("#correct").textContent = "Incorrect!";
   }
//    Increase index by 1 every time it loops back to takeQuiz
    index++    
    if (index < questions.length) {  
   takeQuiz() 
}  else {
    endQuiz()
}
}

// Function to show score, add initials and save score
function endQuiz() {
    questionCard.classList.add("hide");
    clearInterval(timer);
    scoreboardForm.classList.remove("hide");
}

// Function to add points to scoreboard and store in local storage
function setPoints() {
    points.textContent = pointCounter;
    localStorage.setItem("pointCount", pointCounter);
}

// Function to get points from local storage
function getPoints() {
    var storedPoints = localStorage.getItem("pointCount");
    if (storedPoints === null) {
        pointCounter = 0;
    } else {
        pointCounter = storedPoints; 
    }
    points.textContent = pointCounter;
    }

// Create a function to add points each time an answer is correct
// Add divs to start page with title and description
// Add functionality/storage to form
// Create scoreboard/play again page