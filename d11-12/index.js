import "./styles.css";

const calculator = document.querySelector(".calculator");

const numScreen = calculator.querySelector(".calculator__numScreen"),
  screen = numScreen.querySelector(".numScreen__screen"),
  screenShow = screen.querySelector(".screen__show"),
  cancel = numScreen.querySelector(".numScreen__cancel");

const buttons = calculator.querySelector(".calculator__buttons"),
  numPad = buttons.querySelector(".buttons__numPad"),
  number = numPad.querySelectorAll(".numPad__number"),
  operations = buttons.querySelector(".buttons__operations"),
  basic = operations.querySelectorAll(".operations__basic");

const OPERAND1__LS = "operand1",
  OPERATOR__LS = "operator";

function showRealTime(figure) {
  screenShow.innerHTML = figure;
}

function getOperand2(event) {
  event.preventDefault();
  const operand1 = localStorage.getItem(OPERAND1__LS),
    operator = localStorage.getItem(OPERATOR__LS);

  const clickedBtn2 = event.target.value;

  if (operand1 !== null && operator !== null) {
    console.log(operator);
    basicOperations(operand1, clickedBtn2, operator);
  }
}

function basicOperations(operand1, operand2, operator) {
  console.log("------operating-------");
  console.log("-------" + operator + "-------");

  if (operator === "+") {
    operand1 = +operand2;
    console.log(operand1);
  }
  if (operator === "-") {
    operand1 -= operand2;
  }
  if (operator === "*") {
    operand1 *= operand2;
  }
  if (operator === "/") {
    operand1 /= operand2;
  }

  localStorage.setItem(OPERAND1__LS, operand1);
  showRealTime(operand1);
}

function cancelClicked() {
  showRealTime();
}

function handleButtonClick1(event) {
  event.preventDefault();
  const clickedBtn = event.target.value;
  let operand1 = localStorage.getItem(OPERAND1__LS),
    operator = localStorage.getItem(OPERATOR__LS);

  if (operand1 === null) {
    if (parseInt(clickedBtn, 10) >= 0 && parseInt(clickedBtn, 10) <= 9) {
      localStorage.setItem(OPERAND1__LS, parseInt(clickedBtn, 10));
      operand1 = localStorage.getItem(OPERAND1__LS);
      showRealTime(operand1);
    }
  } else {
    showRealTime(operand1);
    if (
      clickedBtn === "+" ||
      clickedBtn === "-" ||
      clickedBtn === "*" ||
      clickedBtn === "/"
    ) {
      localStorage.setItem(OPERATOR__LS, JSON.stringify(clickedBtn));
      console.log(JSON.stringify(clickedBtn));

      operator = localStorage.getItem(OPERATOR__LS);
      // 피연산자1 있는 상태에서, 연산자를 받고
      // 피연산자2가 입력될때까지 대기
      // 피연산자2 가 입력되기 전에 다른 연산자, "=", 혹은 "C" 를 받게되면
      // 바로 거기로 넘어가

      // basicOperations(event.target, operand1, clickedBtn);
    }
    if (parseInt(clickedBtn, 10) >= 0 && parseInt(clickedBtn, 10) <= 9) {
      localStorage.setItem(OPERAND1__LS, parseInt(clickedBtn, 10));
      operand1 = localStorage.getItem(OPERAND1__LS);
      showRealTime(operand1);
    }
  }
  if (clickedBtn === "C") {
    console.log("Cancel!");
    cancelClicked();
  }
}

// function saveToLocal() {}

// function loadOperand1() {
//   const loadedOperand1 = localStorage.getItem(OPERAND1__LS);

//   if (loadedOperand1 !== null) {
//     showRealTime(parseInt(loadedOperand1, 10));
//   }
// }
function reset() {
  localStorage.setItem(OPERAND1__LS, null);
  localStorage.setItem(OPERATOR__LS, null);
}

function init() {
  // loadOperand1();
  reset();

  number.forEach((button) => {
    button.addEventListener("click", handleButtonClick1);
    button.addEventListener("click", getOperand2);
  });
  basic.forEach((button) => {
    button.addEventListener("click", handleButtonClick1);
  });
  cancel.addEventListener("click", handleButtonClick1);
  // 1. 실시간
  // 2. 사칙연산 >> + - / * 이 입력되고 나서 두번째 피연산자를 받게해야됨
  // 3. 클리어
  // 4. 결과
  // css1) 클릭시에 변화주기
}

init();
