const rangeForm = document.querySelector('.range-form'),
    rangeInput = rangeForm.querySelector('input'),
    rangeMax = rangeForm.querySelector('.max-range')
    guessForm = document.querySelector('.guess-form'),
    guessInput = guessForm.querySelector('input'),
    playBtn = guessForm.querySelector('button'),
    isRight = document.querySelector('.isRight');

let answer

function matchAnswer(guess){
    if(guess==answer){
        isRight.innerHTML = 'RIGHT';

    } else{
        isRight.innerHTML = 'WRONG, GUESS AGAIN';

    }
}

function genRandom(max){
    return Math.ceil(Math.random()*(max));
}

function handleChange(e){
    e.preventDefault();
    console.log(e.target.value);
    rangeMax.innerHTML = e.target.value;
    answer = genRandom(e.target.value);
    console.log(answer);
} 

function handleSubmit(e){
    e.preventDefault();
    const guess = guessInput.value;
    matchAnswer(guess);
}

function init(){
    rangeInput.addEventListener("change", handleChange);
    const answer = genRandom(rangeInput.value);
    guessForm.addEventListener("submit", handleSubmit);
    matchAnswer
}

init();