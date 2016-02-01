var answerBox = document.querySelector(".answer-input") //may not need
var questionBox = document.getElementById("question-space")
var questionCard = document.querySelectorAll(".question-top")
var questionCard1 = document.getElementById("q1")
var questionCard2 = document.getElementById("q2")
var questionCard3 = document.getElementById("q3")
var questionCard4 = document.getElementById("q4")
var turnCount = 0

//questions
function askQuestion() {
  return this.question
}
function answerQuestion() {
  return this.answer
}

var questionOne = {question: "What is the head of Slytherin House's full name?",
                   askQuestion: askQuestion,
                   answer: "Severus Snape",
                   answerQuestion: answerQuestion}
questionOne.askQuestion()
questionOne.answerQuestion()

var questionTwo = {question: "How does Voldemort appear in Harry Potter and the Chamber of Secrets?",
                   askQuestion: askQuestion,
                   answer: "He appears via Tom Riddle who comes out of Ginny Weasely's diary.",
                   answerQuestion: answerQuestion}
questionTwo.askQuestion()
questionTwo.answerQuestion()

var questionThree = {question: "Who told Voldemort where Harry's parents were hiding?",
                   askQuestion: askQuestion,
                   answer: "Peter Pettigrew",
                   answerQuestion: answerQuestion}
questionThree.askQuestion()
questionThree.answerQuestion()

var questionFour = {question: "What is Professor McGonnagal's animagus?",
                   askQuestion: askQuestion,
                   answer: "A tabby cat with white circles over its eyes",
                   answerQuestion: answerQuestion}
questionFour.askQuestion()
questionFour.answerQuestion()

var questionFive = {question: "What are owls used for in the Wizarding world?",
                   askQuestion: askQuestion,
                   answer: "They carry, deliver, and pick up mail.",
                   answerQuestion: answerQuestion}
questionFive.askQuestion()
questionFive.answerQuestion()

var questionSix = {question: "What does S.P.E.W mean?",
                   askQuestion: askQuestion,
                   answer: "Society for the Promotion of Elifish Welfare",
                   answerQuestion: answerQuestion}
questionSix.askQuestion()
questionSix.answerQuestion()

var questionSeven = {question: "At what age does a young witch or wizard get to go to Hogwarts?",
                   askQuestion: askQuestion,
                   answer: "11 years old",
                   answerQuestion: answerQuestion}
questionSeven.askQuestion()
questionSeven.answerQuestion()

var questionEight = {question: "What is the name of the town where Harry's parents hid and where Dumbledor grew up?",
                   askQuestion: askQuestion,
                   answer: "Godrick's Hollow",
                   answerQuestion: answerQuestion}
questionEight.askQuestion()
questionEight.answerQuestion()

//questions get clicked and move to the question spaces
$(".answer-box-question").hide();

$("#q1").on('click', function(){
  $('#question-space').fadeIn(2000).text(questionOne.askQuestion()).delay(6000).fadeOut(2000).hide(".answer-box-question")
})

$("#q2").on('click', function(){
  $('#question-space').fadeIn(2000).text(questionTwo.askQuestion()).delay(6000).fadeOut(2000).hide(".answer-box-question")
})

$("#q3").on('click', function(){
  $('#question-space').fadeIn(2000).text(questionThree.askQuestion()).delay(6000).fadeOut(2000).hide(".answer-box-question")
})

$("#q4").on('click', function(){
  $('#question-space').fadeIn(2000).text(questionFour.askQuestion()).delay(6000).fadeOut(2000).hide(".answer-box-question")
})

// $("q4").click(function() {
//   $( "#question-space").fadeIn( "slow", function() {
//     console.log("fadein happened!")
//   });
// });
