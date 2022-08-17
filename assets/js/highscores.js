// selecting variables
let listHighscores = document.querySelector('.highscores-card');
let clearHighScores = document.querySelector('.clear-scores');
   
// displays the high scores on the screen
function loadScores() {
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    // sorts teh highscores from highes to lowest
    highscores.sort(function(x,y) {
        if (x.score < y.score) {
            return 1;
        }
        return -1;
    })
       
    // appends the scores for user to see 
   for (let i = 0; i < highscores.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = highscores[i].initials + ':  ' + highscores[i].score;
    listHighscores.appendChild(listItem);
    }
};

// call function
loadScores();

// clears highscores
clearHighScores.addEventListener('click', function() {
    localStorage.clear('highscores');
    window.location.reload();
    
})
