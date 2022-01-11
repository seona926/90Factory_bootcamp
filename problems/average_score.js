let scores = [];
let numOfSub = 0;
numOfSub = prompt('과목 개수를 입력하세요(정수)');
scores = prompt('과목별 점수를 입력해주세요(","로 구분)').split(',');

function calGrades(numberOfSubjects, scores) {
    let grades = [];
    let average = 0;
    let sum = 0;
    for (let i = 0; i < numberOfSubjects; i++) {
        if (scores[i] >= 95) {
            grades.push('A+');
        } else if (scores[i] >= 90) {
            grades.push('A');
        } else if (scores[i] >= 85) {
            grades.push('B+');
        } else if (scores[i] >= 80) {
            grades.push('B');
        } else if (scores[i] >= 70) {
            grades.push('C');
        } else {
            grades.push('F');
        }
    }

    for (let i = 0; i < grades.length; i++){
        if (grades[i] === 'A+') {
            sum += 4.5;
        } else if (grades[i] === 'A') {
            sum += 4.0;
        } else if (grades[i] === 'B+') {
            sum += 3.5;
        } else if (grades[i] === 'B') {
            sum += 3.0;
        } else if (grades[i] === 'C') {
            sum += 2.5;
        } else sum += 0; 
    }

    average = sum / numberOfSubjects;
    console.log('등급: ' + grades);
    console.log('평점: ' + average.toFixed(2));
}

calGrades(numOfSub, scores);