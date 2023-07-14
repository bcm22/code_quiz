
var question = document.querySelector("#question");
var answerButton1 = document.querySelector("#answer1");
var answerButton2 = document.querySelector("#answer2");
var answerButton3 = document.querySelector("#answer3");
var answerButton4 = document.querySelector("#answer4");
var answerButtons = document.querySelectorAll(".answer-button")

var submitButton = document.querySelector(".submit-score")
var startButton = document.querySelector(".start-button");
var questionDiv = document.querySelector(".question-div")
var introDirv = document.querySelector(".intro")
var timerElement = document.querySelector(".timer");
var viewHighScores = document.querySelector(".view-high-scores");
var viewHighScoresButton = document.querySelector(".view-high-scores-button");
var goBackButton = document.querySelector(".go-back-button");
var clearScoresButton = document.querySelector(".clear-scores-button");
var answerDisplay = document.querySelector(".answer-display")
var answer = document.querySelector(".answer")

var scores = [];
var timerCount;
var timer;
var questionNumber;
var isWin = false;
var finalScreen = document.querySelector(".final-screen");


//hid name div until end of game
//make intro div look better
//add listener on submit button that addScore()
//add listener on viewHighScore button that showHighScore
//showHIghScore needs to hide everything else
//Go back button add listener to show intro screen
//clear scores button add listener to clearScore()

const QUESTIONS = [
    "Commonly used data types DO NOT inlcude:",
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
    finalScore = 0;
    timerElement.classList.remove("display-none")
    viewHighScoresButton.classList.remove("display-none")
    createQuestion(1)
    startTimer()
}

function addScore() {
    const name = document.getElementById("name-input").value;
    scores.push({ name: name, score: finalScore })
    console.log("ADDED SCORE", scores)
    finalScreen.classList.add("display-none")
    showHighScores()

}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer

                clearInterval(timer);
                endOfGame(timerCount);
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            endOfGame(0)
        }
    }, 1000);
}

function endOfGame(score) {
    finalScore = score
    showHighScores()
    questionDiv.classList.add("display-none")
    finalScreen.classList.remove("display-none")
    answerDisplay.classList.add("display-none")
    //show the end game screen hide the question div
}

function showHighScores() {

    for (var i = 0; i < scores.length; i++) {
        viewHighScores.innerHTML += `<p>Name: ${scores[0].name} Score: ${scores[0].score} </p>`
    }
    viewHighScores.classList.remove("display-none")
}

function goBack() {
    introDirv.classList.remove("diplay-none")
    viewHighScores.classList.add("display-none")
}

function clearScores() {
    scores = []
}

startButton.addEventListener("click", startQuiz);

for (button of answerButtons) {
    button.addEventListener('click', function () {
        const answer = this.textContent

        if (questionNumber === 1) {
            if (answer === 'alerts') {
                //correct
    
                //show correct div
                answer.textContent = "Correct"
                answerDisplay.classList.remove("display-none")
            }
            else {
                //incorrect
                timerCount -= 10
                
                //show incorrect div
                answer.textContent = "Wrong"
                answerDisplay.classList.remove("display-none")
            }
            createQuestion(2)
            return
        }
        if (questionNumber === 2) {
            if (answer === 'parenthesis') {
                //correct
                
            }
            else {
                //incorrect
                timerCount -= 10
                
            }
            createQuestion(3)
            return
        }
        if (questionNumber === 3) {
            if (answer === 'all of the above') {
                //correct
                console.log("CORRECT")
            }
            else {
                //incorrect
                timerCount -= 10
        
            }
            isWin = true
            return
        }
    });
}

submitButton.addEventListener("click", addScore);

goBackButton.addEventListener("click", goBack);

clearScoresButton.addEventListener("click", clearScores);

viewHighScoresButton.addEventListener("click", showHighScores);


