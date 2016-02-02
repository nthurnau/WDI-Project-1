
var turnCount = 0

//questions
function askQuestion() {
  return this.question
}
function answerQuestion() {
  return this.answer
}

var game = {
  player1:{},
  player2:{},
  currentQuestion: 0,

  houses:{
    gryffindor: {
      name: "Gryffindor",
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
    },

    ravenclaw: {
      name: "Ravenclaw",
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
    },
    slytherin: {
      name: "Slytherin",
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
    },

    hufflepuff: {
      name: "hufflepuff",
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
      ]
    }
  }
}

// This is round 1 for player 1
$(".answer-box-question").hide()
$(".question-top").on("click", function(){
  $('#question-space').fadeIn(2000).text(game.houses[this.id].questions[0].body).delay(6000).fadeOut(2000).hide(".answer-box-question")
  $("#a1").delay(11000).fadeIn(2000).text(game.houses[this.id].questions[0].answerOptions[0]).delay(10000).fadeOut(2000).hide(".button")
  $("#a2").delay(11000).fadeIn(2000).text(game.houses[this.id].questions[0].answerOptions[1]).delay(10000).fadeOut(2000).hide(".button")
  $("#a3").delay(11000).fadeIn(2000).text(game.houses[this.id].questions[0].answerOptions[2]).delay(10000).fadeOut(2000).hide(".button")
  $("#a4").delay(11000).fadeIn(2000).text(game.houses[this.id].questions[0].answerOptions[3]).delay(10000).fadeOut(2000).hide(".button")
})
//
