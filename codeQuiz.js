var questions = [{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: [
        "<javascript></javascript>",
        "<js></js>",
        "<script></script>",
        "<head></head>"],
    answer: "<script></script>"
},
{
    title: "How do you write 'Hello World' in an alert box?",
    choices: [
        "alert ('Hello World')",
        "msgBox ('Hello World')",
        "alertBox ('Hello World')",
        "Alert ('Hello World'"],
    answer: "alert ('Hello World')"
},
{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: [
        "onchange",
        "onmouseclick",
        "onmouseover",
        "onclick"],
    answer: "onclick"
},
{
    title: "How do you declare a Javascript variable?",
    choices: [
        "v carName;",
        "var carName;",
        "variable carName;",
        "all of them are correct"],
    answer: "var carName;"
},
{
    title: "What is the correct syntax for referring to an external script called 'index.js'?",
    choices: [
        "<script name = 'index.js>'",
        "<script href ='index.js>",
        "<script src ='index.js'>",
        "<script = 'index.js'>"],
    answer: "<script src ='index.js'>"
},
];

var questionIndex = 0;
var time = 60;
var timer;
var questionDiv = document.getElementById("question");
var timerDiv = document.getElementById("time");
var startButton = document.getElementById("startQuiz");
var answerList = document.getElementById("answers");
var submitButton = document.getElementById("submit");
var initial = document.getElementById("Initial");

// start quiz function

function startQuiz() {
    var startScreen = document.getElementById("quizBox");
    startScreen.setAttribute("class", "hide");
    questionDiv.removeAttribute("class");
    // start timer
    timer = setInterval(countDown, 1000); 

    // show time
    timerDiv.textContent = time;

    // render questions
    renderQuestions();

}
function renderQuestions() {
    var currentQuestion = questions[questionIndex];
    var title = document.getElementById("question-title");
    title.textContent = currentQuestion.title
    answerList.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "choice");
        answerBtn.setAttribute("value", choice);
        answerBtn.textContent = choice;
        answerBtn.onclick = answerClick;
        answerList.appendChild(answerBtn);


    })
}
function answerClick() {
    console.log(this.value);
    if (this.value !== questions[questionIndex].answer) {
        time -= 5;
        if (time > 0) {
            time = 0
        }
        // display new time
        timerDiv.textContent = time;
    }
    // move to next question.
    questionIndex++;

    // check if end of question array

    if (questionIndex === questions.length) {
        gameOver();
    } else {
        renderQuestions()
    }
}

function gameOver(){
    // show the end page
    var endScreen = document.getElementById("#endGame");
    endScreen.removeAttribute("class");

    // hide the question div
    questionDiv.setAttribute("class", "hide");

    // show final scores
    var finalScore = document.getElementById("#final-score");
    finalScore.textContent= time;

    // stop timer
    clearInterval (timer) 

}
function countDown () {
    time--;
    timerDiv.textContent = time;
    // check if time ran out
    if (time <= 0){
        gameOver();
    }
}
startButton.onclick = startQuiz