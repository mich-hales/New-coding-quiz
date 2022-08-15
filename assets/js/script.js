// selecting variables
let questionContainer = document.querySelector('.card');
let startButton = document.getElementById('start-button');
let startBtn = document.querySelector('.start-button');
let countdownNumber = document.getElementById('countdown-number');
let viewHighScores = document.getElementById('view-highscores');
let timer = document.querySelector('.timer');
let flexBox = document.querySelector('.flex-container');

// function to start quiz 
function startQuiz() {
    questionContainer.classList.remove('hide');
    startBtn.classList.add('hide');
}

// seconds left
let secondsLeft = 60;
// start timer
function startTimer() {
    
    const myInterval = setInterval(function(){
        secondsLeft--;
        countdownNumber.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(myInterval);
            console.log('time is up!');
            sendMessage();
        }
    }, 1000)
}

// sends message that time is up
function sendMessage() {
    let timesUp = document.createElement('p');
    timesUp.textContent = 'Time is up!';
    timesUp.classList.add('timesUp');
    flexBox.appendChild(timesUp);
}


startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', startQuiz);

