let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let result = 0;

do {
    firstNumber = prompt("첫번째 숫자를 입력하세요");
} while (checkNumberValidation(firstNumber) === false);

do {
    operator = prompt("연산기호를 입력해주세요");
} while (checkOperatorValidation(operator) === false);

do {
    secondNumber = prompt("두번째 숫자를 입력해주세요");
} while (checkNumberValidation(secondNumber) === false);


function checkNumberValidation(number) {
    if (isNaN(number) === true) {
        return false;
    }
}

function checkOperatorValidation(operator) {
    if (operator === '+') {
        return true;
    } else if (operator === '-') {
        return true;
    } else if (operator === '*') {
        return true;
    } else if (operator === '/') {
        return true;
    } else if (operator === '%') {
        return true;
    } else return false;
}

function calculator (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        result = Number(firstNumber) + Number(secondNumber);
        return(console.log(result));
    } else if (operator === '-') {
        result = Number(firstNumber) - Number(secondNumber);
        return(console.log(result));
    } else if (operator === '*') {
        result = Number(firstNumber) * Number(secondNumber);
        return(console.log(result));
    } else if (operator === '/') {
        if ((Number(firstNumber) === 0) || (Number(secondNumber) === 0)) {
            alert("나눗셈에 0을 사용할 수 없어요!")
        } else {
            result = Number(firstNumber) / Number(secondNumber);
            return(console.log(result));
        }
    } else if (operator === '%') {
        if ((Number(firstNumber) === 0) || (Number(secondNumber) === 0)) {
            alert("나머지 연산에 0을 사용할 수 없어요!")
        } else {
            result = Number(firstNumber) % Number(secondNumber);
            return(console.log(result));
        }
    }
}

calculator (firstNumber, operator, secondNumber);
