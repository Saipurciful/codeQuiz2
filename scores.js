const highScore = document.querySelector("#highScore");
const goBack = document.querySelector("#goBack")
const clear = document.querySelector("#clear");

// add function to button
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// get highscores for localStorage
var highscores = localStorage.getItem("highscores");
highscores = JSON.parse(highscores);

// add code that can source score by high score
if (highscores !== null) {
    highscores.sort(function (a, b) {
        return parseInt(b.score) - parseInt(a.score)
    });
    for (var i = 0; i < highscores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = highscores[i].initials + " " + highscores[i].score;
        highScore.appendChild(createLi);

    }
};

goBack.addEventListener("click", function () {
    location.replace("./index.html");
});