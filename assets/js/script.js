// selecting variables
let questionContainer = document.querySelector('.card');
let startButton = document.getElementById('start-button');
let startBtn = document.querySelector('.start-button');
let countdownNumber = document.getElementById('countdown-number');
let viewHighScores = document.getElementById('view-highscores');
let timer = document.querySelector('.timer');
let flexBox = document.querySelector('.flex-container');
let highScoresSection = document.querySelector('.high-scores-section');

// function to start quiz 
function startQuiz() {
    questionContainer.classList.remove('hide');
    startBtn.classList.add('hide');
    showQuestion();
}



startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', startQuiz);


let quizQuestions = [{
    question: 'Inside which element do you put JavaScript?',
    answer1: '<var>', 
    answer2: '<script>', 
    answer3: '<section>', 
    answer4: '<code>', 
    correctAnswer: '<script>'
    }, {
    question: 'Which of the following reverses the order of the elements of an array?',
    answer1: 'reverse()', 
    answer2: 'push()', 
    answer3: 'reduce()', 
    answer4: 'reduceRight()', 
    correctAnswer: 'reverse()'
    }, {
    question: 'How do you get the DOM element with id in JavaScript?',
    answer1: 'window.getElementById(...)', 
    answer2:  'document.innerHTML.getElementById(...)', 
    answer3: 'page.getElementById(...)', 
    answer4: 'document.getElementById(...)', 
    correctAnswer: 'document.getElementById(...)'
}, {
    question: 'Which built-in method combines the text of two strings and returns a new string?',
    answer1: 'append()', 
    answer2: 'concat()', 
    answer3: 'attach()', 
    answer4: 'attach()', 
    correctAnswer: 'concat()'
}, {
    question: 'Which of the following creates a new array with all of the elements of this array for which the provided filtering function returns true?',
    answer1: 'concat()', 
    answer2: 'every()', 
    answer3: 'filter()', 
    answer4: 'some()', 
    correctAnswer: 'filter()'
}];


// selecting dom elements
let questionTitle = document.querySelector('#quiz-question');
let answerOptions = document.querySelectorAll('.answers');  
let answerStatus = document.querySelector('.answer-status');

let score = 0;
let questionIndex = 0;

// selecting buttons
let answer1 = document.getElementById('btn-1');
let answer2 = document.getElementById('btn-2');
let answer3 = document.getElementById('btn-3');
let answer4 = document.getElementById('btn-4');

// change text content to current question
function showQuestion() {
    let currentQuestion = quizQuestions[questionIndex];
    questionTitle.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.answer1;
    answer2.textContent = currentQuestion.answer2;
    answer3.textContent = currentQuestion.answer3;
    answer4.textContent = currentQuestion.answer4;
}

let inputInitialsScore = document.querySelector('.scores');
let yourScore = document.querySelector('.your-score');
let displayYourScore = document.querySelector('.background-highscore');

// for loop for the answers
for (i = 0; i < answerOptions.length; i++) {
    answerOptions[i].addEventListener('click', function(event) {
        event.stopPropagation();
        if (event.currentTarget.innerText === quizQuestions[questionIndex].correctAnswer){
            score++;
            console.log('correct!');
            console.log(score);
            answerStatus.textContent = 'Correct!';
        } else {
            secondsLeft -= 5;
            console.log('incorrect!');
            console.log(score)
            answerStatus.textContent = 'Incorrect!';
        }
        console.log(questionIndex);
        questionIndex++;

        if (questionIndex < 5) {
            showQuestion();
        } 
        
    })
}

// seconds left
let secondsLeft = 60
// start timer
function startTimer() {
    
    const myInterval = setInterval(function(){
        secondsLeft--;
        countdownNumber.textContent = secondsLeft;

        // clear interval and display highscores section
        if (secondsLeft === 0 || questionIndex === 5 ) {
            clearInterval(myInterval);
            // console.log('time is up!');
            // sendMessage();
            questionContainer.classList.add('hide');
            inputInitialsScore.classList.remove('hide');
            answerStatus.classList.add('hide');
            displayYourScore.classList.remove('hide');
            highScoresSection.classList.remove('hide');
            yourScore.textContent = 'Your Score: ' + score;
            highscoresHeader();
        }
    }, 1000)
}

// sends message that time is up
// function sendMessage() {
//     let timesUp = document.createElement('p');
//     timesUp.textContent = 'Time is up!';
//     timesUp.classList.add('timesUp');
//     flexBox.appendChild(timesUp);
// }


let header = document.querySelector('.high-score-header');

// changes the header to highscores
function highscoresHeader() {
    header.textContent = 'High Scores';
}


// record scores
let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
let listHighscores = document.querySelector('.highscores-card');
let clearHighScores = document.querySelector('.clear-scores');
let tryAgain = document.querySelector('.try-again');
let submitBtn = document.querySelector('.submit-scores');
let initialsInput = document.querySelector('.initials-input');


function setLocalStorage (key, value) {
    localStorage.setItem('highscores', JSON.stringify(score));
    console.log(`LocalStorage: ${key} has been set to ${value}.`);
}

// function getLocalStorage (key) {
//     return localStorage.getItem('highscores');
// }

// localStorage.setItem('highscores', JSON.stringify(score));


submitBtn.addEventListener('click', function(e){
    e.stopPropagation();

    let initials = initialsInput.value;
    let userScore = {initials, score};

    highscores.push(userScore);
  
    // highscores = highToLowScores(highscores, 'score');

    for (let i = 0; i < highscores.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = highscores[i].initials + ': ' + highscores[i].score;
        listHighscores.append(listItem);
    }
});


// function highToLowScores(array, key) {
//     return array.sort(function(x,y) {
//         if (x.score < y.score) {
//             return 1;
//         }
//         return -1;
//     })
// }


clearHighScores.addEventListener('click', function() {
    localStorage.removeItem('highscores');
})


// save scores and rank them with their initials

// restart quiz

