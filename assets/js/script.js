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
    showQuestion(quizQuestions);
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


let quizQuestions = [{
    question: 'Inside which element do you put JavaScript?',
    answers: ['<var>', 
    '<script>', 
    '<section>', 
    '<code>'],
    correctAnswer: 1
    }, {
    question: 'Which of the following reverses the order of the elements of an array?',
    answers: ['reverse()',
    'push()',
    'reduce()',
    'reduceRight()'],
    correctAnswer: 0
    }, {
    question: 'How do you get the DOM element with id in JavaScript?',
    answers: ['window.getElementById(...)',
    'document.innerHTML.getElementById(...)',
    'page.getElementById(...)',
    'document.getElementById(...)'],
    correctAnswer: 3
}, {
    question: 'Which built-in method combines the text of two strings and returns a new string?',
    answers: ['append()',
    'concat()',
    'attach()',
    'None of the above'],
    correctAnswer: 1
}, {
    question: 'Which of the following creates a new array with all of the elements of this array for which the provided filtering function returns true?',
    answers: ['concat()',
    'every()',
    'filter()',
    'some()'],
    correctAnswer: 2
}];


// selecting dom elements
let questionTitle = document.querySelector('#quiz-question');
let answerOptions = document.querySelectorAll('.answers');  

function showQuestion(q) {
    questionTitle.textContent = q.question;

    answerOptions.forEach(function(element, index){
        element.textContent = q.answers[index];
          
        element.addEventListener('click', function(){

            if (q.correctAnswer == index) {
                console.log('you are right!');
            } else {
                console.log('you are wrong!');
            }
        });
    }); 
}






// function to get questions to cycle through

// record scores

// subtract time if answer is wrong

// save scores and rank them with their initials

// restart quiz

