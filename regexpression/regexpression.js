function fcnOnclick() {
    document.getElementById("result").innerHTML ='주민등록번호: ';
    let inputText = document.getElementById('identification').value;
    const regexId = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/g;
    const id = inputText.match(regexId).join("");
    const resultId =id.replace(/(?<=)\d{6}$/g, '******')
    document.getElementById("result").innerHTML += resultId;
}
