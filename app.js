
var turnCount = 0
var currentQuestion = 0 //tracks question number
var player1Points = 0
var player2Points = 0
var showQuestionTime = 600 // 6000
var answerWaitTime = 600 // 11000
var answerDisplayTime = 800 // 10000
var fadeTime = 200 // 2000
var questionId = null
var correctAnswer = null
var userAnswer = null
var restartButton = $(".reset-button")


//questions
function askQuestion() {
  return this.question
}
function answerQuestion() {
  return this.answer
}
restartButton.on("click", function() {window.location.reload()})


var game = {
  selections: [], //array for player choices
  playerOne: {},
  playerTwo: {},
  currentPlayer: 0,
  player: null,


  //starts the game on player one and their set of questions and answers. Also calls switchPlayerCheck at the right time

  gamePlay: function(){
    //game.currentPlayer = game.playerOne
    $(".answer-box-question").hide()
    $(".button").hide()
    $("#right").hide()
    $("#wrong").hide()
    $("#win").hide()
    $(".question-top").on("click", function(){
        $(this).removeClass("available").addClass("unavailable")
        // if ($("#gryffindor") && $("#ravenclaw") && $("#slytherin") && $("#hufflepuff").hasClass("unavailable")){
        //   $(".question-top").removeClass("unavailable")
        //
        // }
      questionId = $(this).data('id')
      correctAnswer = game.houses[questionId].questions[game.currentPlayer].answer
      game.displayQuestion($(this).data('id'))
      game.displayAnswers($(this).data('id'))
      currentQuestion += 1
    }),



  $(".button").on("click", function(){
      userAnswer = $(this).text()
      console.log(userAnswer)
      game.checkAnswer() //calls checkAnswer!!
      game.switchPlayerCheck()//checks whose turn it is
      game.resetQuestions()//resets question boxes
      game.gameOver()
    })
  },

  checkAnswer: function() {
    console.log("checking answers")
    // console.log(correctAnswer)
      if ((userAnswer === correctAnswer) && game.currentPlayer === 0) {
            player1Points += 1
            console.log(player1Points)
            $("#p1-score").html(player1Points)
            game.rightAnswerAnimation()
      } else if ((userAnswer === correctAnswer) && game.currentPlayer === 1) {
            player2Points += 1
            console.log(player2Points)
            $("#p2-score").html(player2Points)
            game.rightAnswerAnimation()
          } else {
            game.wrongAnswerAnimation()
            console.log("you're wrong!")
          }
    },

  displayAnswers: function(houseName) {
    game.displayAnswer("#a1", 0, houseName, game.currentPlayer)
    game.displayAnswer("#a2", 1, houseName, game.currentPlayer)
    game.displayAnswer("#a3", 2, houseName, game.currentPlayer)
    game.displayAnswer("#a4", 3, houseName, game.currentPlayer)
  },

  displayAnswer: function(buttonId, answerIndex, houseName){
    $(buttonId).delay(answerWaitTime).fadeIn(fadeTime).text(game.houses[questionId].questions[game.currentPlayer].answerOptions[answerIndex]).delay(answerDisplayTime).fadeOut(fadeTime).hide(".button")
  },

  switchPlayerCheck: function(){
    if (currentQuestion < 4) {
      game.currentPlayer = 0
      console.log(game.currentPlayer)
    } else {
      console.log("changing turns")
      game.currentPlayer = 1
      console.log(game.currentPlayer)
      if(currentQuestion == 4){
        window.alert("It's Player 2's Turn!")
      }
    }
    console.log("currentQuestion:", currentQuestion)
  },

  rightAnswerAnimation: function() {
    $("#right").fadeIn(2000).delay(1000).fadeOut(2000).hide("#right")
  },
  wrongAnswerAnimation: function() {
    $("#wrong").fadeIn(2000).delay(1000).fadeOut(2000).hide("#wrong")
  },

  displayQuestion: function(houseName) {
     $('#question-space').fadeIn(fadeTime).text(game.houses[questionId].questions[game.currentPlayer].body).delay(showQuestionTime).fadeOut(fadeTime).hide(".answer-box-question")
  },

 checkWinner: function() {
   if (player1Points < player2Points) {
     $(".answer-box-question").fadeIn(fadeTime).text("Player Two Wins!").delay(showQuestionTime).fadeOut(fadeTime) &&
     $("#win").delay(2000).fadeIn(fadeTime).fadeOut(fadeTime)
   } else if (player1Points == player2Points) {
     $(".answer-box-question").fadeIn(fadeTime).text("It's a Tie!").delay(showQuestionTime).fadeOut(fadeTime) &&
      $("#win").delay(2000).fadeIn(fadeTime).fadeOut(fadeTime)
   } else {
     $(".answer-box-question").fadeIn(fadeTime).text("Player One Wins!").delay(showQuestionTime).fadeOut(fadeTime) &&
      $("#win").delay(2000).fadeIn(fadeTime).fadeOut(fadeTime)
   }

 },

 resetQuestions: function() {
 if ($("#gryffindor") && $("#ravenclaw") && $("#slytherin") && ("#hufflepuff").hasClass("unavailable")){
   $(".question-top").removeClass("unavailable")
   }
 }

 gameOver: function() {
   if (currentQuestion >= 8) {
     game.checkWinner() //checks who is winning
   }
 },

  houses: [
    {
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
    {
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
    {
      name: "Slytherin",
      questions: [
        {body: "What are owls used for in the Wizarding world?",
        askQuestion: askQuestion,
        answer: "c. To send and deliver mail and packages",
        answerOptions: ["a. To lookout for enemies", "b. To be companion animals", "c. To send and deliver mail and packages", "d. To catch mice in one's home or farm"],
        answerQuestion: answerQuestion},

        {body: "What does S.P.E.W mean?",
        askQuestion: askQuestion,
        answer: "a. Society for the Promotion of Elifish Welfare",
        answerOptions: ["a. Society for the Promotion of Elifish Welfare", "b. Society for the Prevention of Evil Warlocks", "c. Society for the Perversion of Entish Woodlands", "d. Society of the Pleasntness of Elastic Waistbands"],
        answerQuestion: answerQuestion}
      ]
    },
    {
      name: "hufflepuff",
      questions: [
        {body: "At what age does a young witch or wizard get to go to Hogwarts?",
        askQuestion: askQuestion,
        answer: "d. 11 years old",
        answerOptions: ["a. 17 years old", "b. 5 years old", "c. 14 years old", "d. 11 years old"],
        answerQuestion: answerQuestion},

        {body: "What is the name of the town where Harry's parents hid and where Dumbledor grew up?",
        askQuestion: askQuestion,
        answer: "b. Godrick/'s Hollow",
        answerOptions: ["a. Godrick/'s Fuller", "b. Godrick/'s Hollow", "c. Goodman/'s Hollow", "d. Little Whinging"],
        answerQuestion: answerQuestion}
      ]
    }
  ]
}

game.gamePlay()
