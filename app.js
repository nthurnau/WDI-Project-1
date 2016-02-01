var answerBox = document.querySelector(".answer-input") //may not need
var questionBox = document.getElementById("question-space")
var questionCard = document.querySelectorAll(".question-top")
var questionCard1 = document.getElementById("q1")
var questionCard2 = document.getElementById("q2")
var questionCard3 = document.getElementById("q3")
var questionCard4 = document.getElementById("q4")

//questions
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

var questionTwo = {question: "How does Voldemort appear in Harry Potter and the Chamber of Secrets?",
                   answer: "He appears via Tom Riddle who comes out of Ginny Weasely's diary."}
questionTwo.askQuestion()
questionTwo.answerQuestion()

var questionThree = {question: "Who told Voldemort where Harry's parents were hiding?",
                   answer: "Peter Pettigrew"}
questionThree.askQuestion()
questionThree.answerQuestion()

var questionFour = {question: "What is Professor McGonnagal's animagus?",
                   answer: "A tabby cat with white circles over its eyes"}
questionFour.askQuestion()
questionFour.answerQuestion()

var questionFive = {question: "What are owls used for in the Wizarding world?",
                   answer: "They carry, deliver, and pick up mail."}
questionFive.askQuestion()
questionFive.answerQuestion()

var questionSix = {question: "What does S.P.E.W mean?",
                   answer: "Society for the Promotion of Elifish Welfare"}
questionSix.askQuestion()
questionSix.answerQuestion()

var questionSeven = {question: "At what age does a young witch or wizard get to go to Hogwarts?",
                   answer: "11 years old"}
questionSeven.askQuestion()
questionSeven.answerQuestion()

var questionEight = {question: "At what age does a young witch or wizard get to go to Hogwarts?",
                   answer: "11 years old"}
questionEight.askQuestion()
questionEight.answerQuestion()

//questions get clicked and move to the question spaces
