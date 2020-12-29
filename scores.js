const highScore = document.querySelector("#highScore");
const goBack = document.querySelector("#goBack")
const clear = document.querySelector("#clear");

// 2. addEventListener to "clear high scores" button 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// 3. convert text from local storage into JS object
var highscores = localStorage.getItem("highscores");
highscores = JSON.parse(highscores);

// 4. create loop for highscores and li for initials input from user
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



// addEventListener to "goBack" button when click link back to index.html page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});