var answerBox = document.querySelector(".answer-input") //may not need
var questionBox = document.getElementById("question-space")
var questionCard = document.querySelectorAll(".question-top")
var questionCard1 = document.getElementById("q1")
var questionCard2 = document.getElementById("q2")
var questionCard3 = document.getElementById("q3")
var questionCard4 = document.getElementById("q4")


function askQuestion() {
  console.log(this.question)
}
function answerQuestion() {
  console.log(this.question)
}

var questionOne = {question: "What is the head of Slytherin House's full name?",
                   answer: "Severus Snape"}
questionOne.askQuestion()
questionOne.answerQuestion()

var questionTwo = {question: "What is the head of Slytherin House's full name?",
                   answer: "Severus Snape"}
questionTwo.askQuestion()
questionTwo.answerQuestion()

var questionThree = {question: "What is the head of Slytherin House's full name?",
                   answer: "Severus Snape"}
questionThree.askQuestion()
questionThree.answerQuestion()
