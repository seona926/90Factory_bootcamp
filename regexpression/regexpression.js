
function fcnOnclick() {
    document.getElementById("result").innerHTML ='주민등록번호: ';
    let idValue = document.getElementById('identification').value;
    let arrID = [];
    let resultID = '';
    let reg = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/g;
    if(reg.test(idValue)) {
        arrID = idValue.split("");
        for (let i = 0; i < arrID.length; i++) {
            if (i <= 6) {
                resultID += arrID[i];
            } else if (i >= 7) {
                resultID += '*';
            }
        }
        document.getElementById("result").innerHTML += resultID;
    } else {
        document.getElementById("result").innerHTML += '유효한 주민등록번호가 아닙니다.';
    }
}
