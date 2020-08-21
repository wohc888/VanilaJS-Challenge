import "./styles.css";

const rangeInput = document.querySelector(".game__rangeSetting"),
  rangeRealTime = document.querySelector(".game__range"),
  guessInput = document.querySelector(".game__guessInput"),
  guessSubmit = document.querySelector(".game__guessSubmit"),
  result = document.querySelector(".game__result");

function realTimeInput(event) {
  const rangeSet = event.target.value;

  rangeInput.value = rangeSet;

  showRange(rangeInput.value);
}

function showRange(inputValue) {
  rangeRealTime.innerHTML = inputValue;
}

function generateRandom(maxRange) {
  const randomAnswer = Math.round(Math.random() * maxRange);

  return randomAnswer;
}

function gameResult(event) {
  event.preventDefault();

  const randomAnswer = generateRandom(rangeInput.value),
    userGuess = guessInput.value,
    error = new Error("No range Set");

  if (rangeInput.value === "0") {
    throw error;
  }

  if (result.hasChildNodes()) {
    result.removeChild(result.childNodes[0]);
    result.removeChild(result.childNodes[0]);
    result.removeChild(result.childNodes[0]);
  }

  const span = document.createElement("span");
  span.innerText = `You chose: ${userGuess}, machine chose: ${randomAnswer}.`;
  result.appendChild(span);

  if (userGuess === JSON.stringify(randomAnswer)) {
    const lineBreak = document.createElement("br");
    result.appendChild(lineBreak);
    const h3 = document.createElement("h3");
    h3.innerText = "You won!";
    result.appendChild(h3);
  } else {
    const lineBreak = document.createElement("br");
    result.appendChild(lineBreak);
    const h3 = document.createElement("h3");
    h3.innerText = "You lost!";
    result.appendChild(h3);
  }
}

function init() {
  // 1. range 조절에 따른 span.innerText
  // 2. guessInput 입력 후 play 버튼 눌렀을 때 guessInput.value 전달
  // 3. 난수생성
  // 4. 전달받은 guessInput.value 와 난수를 대조하여 결과 출력
  rangeInput.addEventListener("input", realTimeInput);
  guessSubmit.addEventListener("click", gameResult);
}

init();
