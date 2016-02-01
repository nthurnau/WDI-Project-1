var answerBox = document.querySelector(".answer-input") //may not need
var questionBox = document.getElementById("question-space")
var questionCard = document.querySelectorAll(".question-top")
var questionCard1 = document.getElementById("q1")
var questionCard2 = document.getElementById("q2")
var questionCard3 = document.getElementById("q3")
var questionCard4 = document.getElementById("q4")
var turnCount = 0

//questions

var game = {
  player1:{}
  player2:{}
  houses:{
    gryffindor: {
      currentQuestion = 0
      name: "Gryffindor"
      questions: [
        {body: "What is the head of Slytherin House's full name?",
        askQuestion: askQuestion,
        answer: "d. Severus Snape",
        answerOptions: ["a. Sibilus Snop", "b. Sirius Snape", "c. Snivelus Snape", "d. Severus Snape"],
        answerQuestion: answerQuestion},

        {body: "How does Voldemort appear in Harry Potter and the Chamber of Secrets?",
        askQuestion: askQuestion,
        answer: "c. As an apparition of young Tom Riddle",
        answerOptions: ["a. As Himself, duh", "b. He's not in that one.", "c. As an apparition of young Tom Riddle", "d. As an apparition of middle-aged Tom Riddle",],
        answerQuestion: answerQuestion}
      ]
    }
    ravenclaw: {
      currentQuestion = 0
      name: "Ravenclaw"
      questions: [
        {body: "Who told Voldemort where Harry's parents were hiding?",
        askQuestion: askQuestion,
        answer: "a. Peter Pettigrew",
        answerOptions: ["a. Peter Pettigrew", "b. Sirius Black", "c. Hargird", "d. Lucius Malfoy"],
        answerQuestion: answerQuestion},

        {body: "What is Professor McGonnagal's animagus?",
        askQuestion: askQuestion,
        answer: "d. A regular tabby with white circles on its eyes",
        answerOptions: ["a. A black cat with white paws.", "b. An orange tabby with squares around its eyes", "c. A gray cat with white circles around its eyes", "d. A regular tabby with white circles on its eyes"],
        answerQuestion: answerQuestion}
      ]
    }
    slytherin: {
      currentQuestion = 0
      name: "Slytherin"
      questions: [
        {body: "What are owls used for in the Wizarding world?",
        askQuestion: askQuestion,
        answer: "c. A regular tabby with white circles on its eyes",
        answerOptions: ["a. To lookout for enemies", "b. To be companion animals", "c. To send and deliver mail and packages", "d. To catch mice in one's home or farm"],
        answerQuestion: answerQuestion},

        {body: "What does S.P.E.W mean?",
        askQuestion: askQuestion,
        answer: "a. A regular tabby with white circles on its eyes",
        answerOptions: ["a. Society for the Promotion of Elifish Welfare", "b. Society for the Prevention of Evil Warlocks", "c. Society for the Perversion of Entish Woodlands", "d. Society of the Pleasntness of Elastic Waistbands"],
        answerQuestion: answerQuestion}
      ]
    }
    hufflepuff: {
      currentQuestion = 0
      name: "hufflepuff"
      questions: [
        {body: "At what age does a young witch or wizard get to go to Hogwarts?",
        askQuestion: askQuestion,
        answer: "d. 11 years old",
        answerOptions: ["a. 17 years old", "b. 5 years old", "c. 14 years old", "d. 11 years old"],
        answerQuestion: answerQuestion},

        {body: "What is the name of the town where Harry's parents hid and where Dumbledor grew up?",
        askQuestion: askQuestion,
        answer: "b. Godrick's Hollow",
        answerOptions: ["a. Godrick's Fuller", "b. Godrick's Hollow", "c. Goodman's Hollow", "d. Little Whinging"],
        answerQuestion: answerQuestion}
    }
  }

}

function askQuestion() {
  return this.question
}
function answerQuestion() {
  return this.answer
}


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
