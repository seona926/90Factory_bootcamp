let input = [2,'3 ABC','5 /HTP'];

const numOfTestcase = input[0];
let numOfRepeat = 0;
let repeatChar = '';
let newChar = '';

for (let i = 1; i < input.length; i++) {
    numOfRepeat = parseInt(input[i]);

    repeatChar = input[i].split('').join('');
    repeatChar = repeatChar.substr(2).split('');

    for (let i = 0; i < repeatChar.length; i++) {
        for (let j = 0; j < numOfRepeat; j++) {
            newChar += repeatChar[i];
        }
    }
    newChar += '\n';
    
}

console.log(newChar);








