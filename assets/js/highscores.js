   
let listHighscores = document.querySelector('.highscores-card');
let clearHighScores = document.querySelector('.clear-scores');
   
function loadScores() {
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    highscores.sort(function(x,y) {
        if (x.score < y.score) {
            return 1;
        }
        return -1;
    })
       
   for (let i = 0; i < highscores.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = highscores[i].initials + ':  ' + highscores[i].score;
    listHighscores.appendChild(listItem);
    }
};

loadScores();

clearHighScores.addEventListener('click', function() {
    localStorage.clear('highscores');
    window.location.reload();
    
})
