// Question Array

/*   
anystring@anystring.anystring
The regular expression:
/\S+@\S+\.\S+/ 
*/

const questions = [
    { question: 'Enter Your First Name' },
    { question: 'Enter Your Last Name' },
    { question: 'Enter Your Email', pattern: '/\S+@\S+\.\S+/ ' },
    { question: 'Create A Password', type: 'password' },
];

// Transition Times

const shakeTime = 100;  // Shake transition time
const switchTime = 200; // Transition Between Questions

// Init Position at First question
let position = 0;

// Init DOM Elements
// We just grabbing each element within page
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS

// When DOM loads we need put first question
document.addEventListener('DOMContentLoaded', getQuestion);


// Next button Click
nextBtn.addEventListener('click', validate);



// FUNCTIONS

// Get Question from array & add to HTML

function getQuestion() {
    // Get current question
    inputLabel.innerHTML = questions[position].question;
    // Get current Type
    inputField.type = questions[position].type || 'text';
    // Get current Answer
    inputField.value = questions[position].answer || ''; 
    // Focus on Element
    inputField.focus();

    // Set progress bar width - variable to the questions length
    progress.style.width = (position * 100) / questions.length + '%';

    // Add user icon or back arrow depending on question
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
}


// Display question to user
function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}

// Hide Question from user

function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
}


// Validate field
function validate() {
    //make sure pattern matches if there is one
    if(!inputField.value.match(questions[position].pattern) || /.+/) {
        inputFail();
    } else {
        inputPass();
    }