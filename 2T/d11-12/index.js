const firstLine = document.querySelector('.firstline'),
    board = firstLine.querySelector('.board'),
    reset = firstLine.querySelector('.button_reset'),
    secondLine = document.querySelector('.secondline'),
    numbers = secondLine.querySelectorAll('.numpad_num'),
    equal = secondLine.querySelector('.numpad_equal'),
    operators = secondLine.querySelectorAll('.operator_operator');

let firstValue = "",
    firstIn = false,
    secondValue = "",
    secondIn = false,
    currentOpeartor = "",
    carry;

function operatorSwitch(){
    const firstOperand = parseInt(firstValue),
        secondOperand = parseInt(secondValue);

    switch(currentOpeartor){
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "*":
            return firstOperand * secondOperand;
        case "/":
            return firstOperand / secondOperand;
        default:
            return;
    }
}

function calculate(){
    const calculation = operatorSwitch();
    board.innerHTML = calculation;
    firstValue = calculation;
    secondIn = false;
    secondValue = "";
}

function handleNumClick(e){
    e.preventDefault();
    operand = parseInt(e.target.innerText);
    
    if(!firstIn){
        firstValue = firstValue + operand;
        board.innerHTML = operand;
    } else {
        secondValue = secondValue + operand;
        board.innerHTML = operand;
        secondIn = true;
    }
}

function handleOpeartorClick(e){
    e.preventDefault();
    operator = e.target.innerText;
    if(!firstIn){
        firstIn = true;
    }
    if(firstIn && secondIn){
        calculate();
    }
    currentOpeartor = operator;
}

function handleReset(e){
    e.preventDefault();
    firstValue = '';
    firstIn = false;
    secondValue = '';
    secondIn = false;
    currentOpeartor = '';
    board.innerText = '0';
}

function handleEqualClick(e){
    e.preventDefault();
    if(firstIn && secondIn){
        calculate();
    }
}

function init(){
    numbers.forEach(number => {
        number.addEventListener("click", handleNumClick);
    });
    operators.forEach(operator => {
        operator.addEventListener("click", handleOpeartorClick);
    });
    reset.addEventListener("click", handleReset);
    equal.addEventListener("click", handleEqualClick);
}

init();