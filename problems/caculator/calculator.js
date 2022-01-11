let numbers = []
numbers = prompt("연산할 계산식을 공백 없이 입력해주세요. (ex. 6*(-3)").split("");

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
    return console.log(result.toFixed(4));
}

function remainder (firstNumber, secondNumber) {
    result = firstNumber % secondNumber;
    return console.log(result.toFixed(4));
}

if (numbers.slice(1).includes('+')) {
    setNumbers('+');
    add(firstNumber, secondNumber);
} else if (numbers.slice(1).includes('-')) {
    setNumbers('-');
    substract(firstNumber, secondNumber);
} else if (numbers.slice(1).includes('*')) {
    setNumbers('*');
    multiply(firstNumber, secondNumber);
} else if (numbers.slice(1).includes('/')) {
    setNumbers('/');
    divide(firstNumber, secondNumber);
} else if (numbers.slice(1).includes('%')){
    setNumbers('%');
    remainder(firstNumber, secondNumber);
} else {
    alert('잘못된 수식을 입력하였습니다.');
}
console.log(numbers.slice(1));

function setNumbers(operator) {
    console.log(operator);
    index = numbers.indexOf(operator);
    firstNumber = (numbers.slice(0, index)).join("");
    secondNumber = (numbers.slice(index + 1, numbers.length)).join("");

    console.log('first: '+ firstNumber);
    console.log('second: ' + secondNumber);

    let regExp = /\(([^)]*)\)/;
    if (firstNumber.includes('(') === false) {
        firstNumber = Number(firstNumber);
    } else {
        let matches = regExp.exec(firstNumber);
        firstNumber = Number(matches[1]);
    }
    
    if (secondNumber.includes('(') === false) {
        secondNumber = Number(secondNumber);
    } else {
        let matches = regExp.exec(secondNumber);
        secondNumber = Number(matches[1]);
    }
    

}
