function fcnOnclick() {

    document.getElementById("result").innerHTML ='주민등록번호: ';
    let inputText = document.getElementById('identification').value;

    const regexId = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/g;

    let id = inputText.match(regexId);
    let stringId = id.join("");

    let pureId = stringId.replace('-','')
    let arrId = pureId.split('');

    // 13번째 숫자 계산
    let element13 = 11 - ((Number(arrId[0]) * 2) + (Number(arrId[1]) * 3) + (Number(arrId[2]) * 4) + (Number(arrId[3]) * 5) + 
    (Number(arrId[4]) * 6) + (Number(arrId[5]) * 7) + (Number(arrId[6]) * 8) + 
    (Number(arrId[7]) * 9) + (Number(arrId[8]) * 2) + (Number(arrId[9]) * 3) + (Number(arrId[10]) * 4) + (Number(arrId[11]) * 5)) % 11;

    if (element13 === 11) {
        element13 = 1;
    } else if(element13 === 10) {
        element13 = 0;
    }
    
    if (Number(arrId[12]) === Number(element13)) {
        let resultId = stringId.replace(/(?<=)\d{6}$/g, '******')
        document.getElementById("result").innerHTML += resultId;
    } else document.getElementById("result").innerHTML = '유효한 주민등록번호가 없네요...';

}

// /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/g

// function fcnOnclick() {
//     document.getElementById("result").innerHTML ='주민등록번호: ';
//     let inputText = document.getElementById('identification').value;
//     const regexId = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/g;
//     const id = inputText.match(regexId).join("");
//     const resultId =id.replace(/(?<=)\d{6}$/g, '******')
//     document.getElementById("result").innerHTML += resultId;
// }