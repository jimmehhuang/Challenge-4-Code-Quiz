//get all document elements
const startButton = document.querySelector(".start-btn");
const quizCard = document.querySelector(".quiz-card");
const genButtons = document.querySelector(".button");
const questionCard = document.querySelector("#question-card");
const finishScreen = document.querySelector("#finish-screen");
const highScores = document.querySelector("#highscores");

//Quiz question/answer array of objects
var questions = [
    {
        questionNum: "Commonly used data types do NOT include",
        choices: ["A: Symbols", "B: Strings", "C: Alerts", "D: Numbers"],
        correctAnswer: "C: Alerts",
    },
    {
        questionNum: "What type of data can be stored in a single array?",
        choices: ["A: Numbers and strings", "B: Flexboxes", "C: Booleans", "D: All of the above"],
        correctAnswer: "C: Booleans",
    },
    {
        questionNum: "The condition of an if/else statement is enclosed in:",
        choices: ["A: Curly brackets", "B: Strings", "C: Parentheses", "D: Square brackets"],
        correctAnswer: "A: Curly brackets",
    },
    {
        questionNum: "A very useful tool used during development and debugging for printing content to the debugger is",
        choices: ["A: Strings", "B: CSS", "C: for loops", "D: console.log()"],
        correctAnswer: "D: console.log()",
    },
    {
        questionNum: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["A: Curly brackets", "B: Parentheses", "C: Strings", "D: while loops"],
        correctAnswer: "B: Parentheses",
    }
]

//Start quiz, hides quiz card and reveals first question
function startQuiz(){
    quizCard.classList.add("hidden");
    questionCard.classList.remove("hidden");
    nextQuestion;
}
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", timer);

//obtain questions/answer choices from array
//keep track of which question the quiz is on
//keep score, increase by 1 if it matches selection
genButtons.addEventListener("click", nextQuestion);
var questionNumber = 1;
var score = 0;
function nextQuestion(){
    const qNumber = document.querySelector("question");
    let question1 = "<h1>" + questions[0].questionNum + "</h1>";
    qNumber.textContent() = question1;
    for(var x=0; x<questions.length; x++){
        questionNumber++;
        var response = questions[x].q1;
        if (response === questions[x].correctAnswer){
            score++;
        }
        if (questionNumber = 5){
            scoreScreen;
        }
    }
}
//reveal score screen
function scoreScreen(){
    finishScreen.classList.remove("hidden");
    questionCard.classList.add("hidden");
}
//reveal High Score screen
function hScores(){
    finishScreen.classList.add("hidden");
    highScores.classList.remove("hidden");
}
//save scores locally w/ text entry
var saveButton = document.querySelector("#save");
var resetButton = document.querySelector("#delete");

var hScore = localStorage.getItem("#highscores");

saveButton.addEventListener("click", function() {
    hScore.textContent = score;
    localStorage.setItem("<li>", hScore);
});

resetButton.addEventListener("click", function() {
    counter.textContent = "";
});
//timer
var timeLeft = document.getElementById("timer-display");
var secondsLeft = 60;
function timer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }
        if (sec = 0){
            scoreScreen;
        }
      }, 1000);
}    