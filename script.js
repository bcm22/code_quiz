
var question = document.querySelector("#question");
var answerButton1 = document.querySelector("#answer1");
var answerButton2 = document.querySelector("#answer2");
var answerButton3 = document.querySelector("#answer3");
var answerButton4 = document.querySelector("#answer4");
var answerButtons = document.querySelectorAll(".answer-button")

var startButton = document.querySelector(".start-button");
var questionDiv = document.querySelector(".question-div")
var introDirv = document.querySelector(".intro")
var timerElement = document.querySelector(".timer");
var scores = [];
var timerCount;
var timer;
var questionNumber;

const QUESTIONS = [
    "Commonly used data types DO NOT inlcude",
    "The condition in an if / else statement is inclosed with ____.",
    "Arrays in JavaScript can be used to store _____.",
]

const ANSWERS1 = [
    "strings",
    "quotes",
    "numbers and strings",
]

const ANSWERS2 = [
    "booleans",
    "curly brackets",
    "other arrays",
]

const ANSWERS3 = [
    "alerts",
    "parenthesis",
    "booleans",
]

const ANSWERS4 = [
    "numbers",
    "square brackets",
    "all of the above",
]


function createQuestion(number) {
    questionNumber = number
    question.textContent = QUESTIONS[questionNumber - 1]
    answerButton1.textContent = ANSWERS1[questionNumber - 1]
    answerButton2.textContent = ANSWERS2[questionNumber - 1]
    answerButton3.textContent = ANSWERS3[questionNumber - 1]
    answerButton4.textContent = ANSWERS4[questionNumber - 1]
    questionDiv.classList.remove("display-none")
    nextQuestion = false
}

function startQuiz() {
    introDirv.classList.add("display-none")
    timerCount = 60;
    createQuestion(1)
    startTimer()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                //   winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            // loseGame();
        }
    }, 1000);
}


function clearScores() {
    scores = []
}

startButton.addEventListener("click", startQuiz);
for (i of answerButtons) {
    i.addEventListener('click', function () {
        const answer = this.textContent
        console.log("CREATED LISTENER", answer, questionNumber)
        if (questionNumber == 1) {
            if (answer === 'alerts') {
                //correct
                console.log("CORRECT")
            }
            else {
                //incorrect
                timerCount -= 10
                console.log("INCORRECT")
            }
            createQuestion(2)
            }
        });
}