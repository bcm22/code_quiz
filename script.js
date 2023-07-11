
var question = document.querySelector("#question");
var answerButton1 = document.querySelector("#answer1");
var answerButton2 = document.querySelector("#answer2");
var answerButton3 = document.querySelector("#answer3");
var answerButton4 = document.querySelector("#answer4");
var scores=[];


function question1(){
    question.textContent="The first question"
    answerButton1.textContent="First "
}

function question2(){

}

function startQuiz(){
    question1()

}

function checkAnswer(questionNumber, answer){
    if(questionNumber == 1){
        // return answer ==
    }
}

function clearScores(){
    scores = []
}