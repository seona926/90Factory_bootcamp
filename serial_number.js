let input = '';
let arrayItems = [];
let newItem = [];
do {
    input = prompt('제품을 입력하세요').toLowerCase();
    makeSerialNumber(input);
} while(input !== 'q');


// 시리얼 넘버 뒷 번호 만들기
function numberPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}


// item 오브젝트 생성
function Items(item, letters, count) {
    this.item = item;
    this.letters = letters;
    this.count = count;
};

// 시리얼 넘버 만드는 함수
function makeSerialNumber(inputObject) {
    if (inputObject === 'q') {
        return;
    }
    let serialNumber = '';
    let firstTwoLetter = '';

    // 처음 두 개의 문자열 구하기
    for (let i = 0; i < 2; i++) {
        firstTwoLetter += inputObject[i];
    }

    // 배열 안에 동일한 값이 있을 경우
    if (arrayItems.includes(inputObject) === true) {
        newItem.push(new Items(inputObject, firstTwoLetter, 1));
        let index = newItem.findIndex(i=>i.item === inputObject);
        newItem[index].count += 1;
        serialNumber = newItem[index].letters.toUpperCase() + numberPad(newItem[index].count, 4);
        arrayItems.push(inputObject);
        
        console.log(serialNumber);
    } else { // 배열 안에 동일한 값이 없을 경우
        serialNumber = firstTwoLetter.toUpperCase() + numberPad(1, 4);
        arrayItems.push(inputObject);

        console.log(serialNumber);
    }
}

