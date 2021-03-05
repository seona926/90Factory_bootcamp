let numbers = []
numbers = prompt("연산할 계산식을 공백 없이 입력해주세요. (ex. 6+3)").split("");

let firstNumber = 0;
let secondNumber = 0;
let index = 0;
let result = 0;

function add (firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    return console.log(result);
}

function substract (firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    return console.log(result);
}

function multiply (firstNumber, secondNumber) {
    result = firstNumber * secondNumber
    return console.log(result);
}

function divide (firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    return console.log(result);
}

if (numbers.includes('+')) {
    setNumbers('+');
    add(firstNumber, secondNumber);
} else if (numbers.includes('-')) {
    setNumbers('-');
    substract(firstNumber, secondNumber);
} else if (numbers.includes('*')) {
    setNumbers('*');
    multiply(firstNumber, secondNumber);
} else {
    setNumbers('/');
    divide(firstNumber, secondNumber);
}

function setNumbers(operator) {
    index = numbers.indexOf(operator);
    firstNumber = Number((numbers.slice(0, index)).join(""));
    secondNumber = Number((numbers.slice(index + 1, numbers.length)).join(""));
}
