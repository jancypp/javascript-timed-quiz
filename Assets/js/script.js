// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
const questions = [
  {
    question: "Which tag in the HTML document is used to link a JavaScript file?",
    options: ["<script>", "<link>", "<src>", "<href>"],
    answer: "<script>",
  },
  {
    question: "How do you write an array?",
    options: ["With {}", "With ()", "With <>", "With []"],
    answer: "With []",
  },
  {
    question: "What is a type of variable in JavaScript?",
    options: ["None", "Central", "Global", "Target"],
    answer: "Global",
  }
];

var introSection = document.querySelector(".intro-section"); //row 22 HTML
var questionSection = document.querySelector(".question-section"); //row 27 HTML
var questionHeading = document.querySelector("#question-heading"); //row 28 HTML
var options = document.querySelector(".options"); //row 30 HTML
var optionOne = document.querySelector("#option1"); //row 31 HTML
var optionTwo = document.querySelector("#option2"); //row 31 HTML
var optionThree = document.querySelector("#option3"); //row 32 HTML
var optionFour = document.querySelector("#option4"); //row 33 HTML
var initialSection = document.querySelector(".initial-section"); //row 36 HTML
var resultSection = document.querySelector(".highscore"); // row 43 HTML
var timerSection = document.querySelector("#timer"); // row 16 HTML
var timerCount = 30;
var index = 0;
var timerInterval;

//Pseudocode
//  * Prompted to start the quiz by clicking a button - event listener
var start = document.querySelector("#begin");

start.addEventListener("click", startQuiz);

//  * The other questions will not display when the other questions are presented
function startQuiz() {
  introSection.classList.add("hide");
  questionSection.classList.remove("hide");
  runQuestion();
  startTime();
}

//  * I will be presented with the first question
//  * I will be presented with the options answers
function runQuestion() {
  questionHeading.textContent = questions[index].question;
  optionOne.textContent = questions[index].options[0];
  optionTwo.textContent = questions[index].options[1];
  optionThree.textContent = questions[index].options[2];
  optionFour.textContent = questions[index].options[3];
}

//event listener for the button click on the answers and function to run through each question
options.addEventListener("click", function (event) {
  if (!event.target.matches("button")) {
    return
  }
  var selection = event.target.textContent;
  console.log(selection);
  console.log(questions[index].answer);
  if (selection == questions[index].answer) {
    console.log("correct");
  }
  else {
    timerCount -= 10
    console.log("wrong");
  }
  index += 1
  if(index < questions.length) {
    runQuestion()
  } else {
    endGame()
  }
})

//focus on where they enter their initials

//  * I will be given a specified amount of time to answer all the questions in the quiz
function startTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    timerCount--;
    timerSection.textContent = timerCount;
    if (timerCount <= 0) {
      endGame();
    }
  }, 1000);
}
function endGame() {
  sendMessage();
  score = timerCount;
  clearInterval(timerInterval);
}

function sendMessage() {
  timerSection.textContent = "End of game!"
}

//  * When I answer correctly ther quiz should move to the next question
//  * When I answer a question incorrectly 10 seconds should be deducted from the timer
//  * I'm alerted if I answered the question correctly or incorrectly
//  * I want my score tallied and displayed after all the questions were answered
//  * I will be prompted to input my initials when the game is over
//  * I'll be prompted to clear my score or play again



