function addCycle(num) {
    let cycle = 0;
    let numArray = [0, 0];
    let oldNumber = [0, 0];
    let newNumber = [0, 0];

    // 숫자를 배열 요소로 넣기
    if (num > 10) {
        let ele = num.toString().split('');
        numArray[0] = Number(ele[0]);
        numArray[1] = Number(ele[1]);
    } else {
        let ele = num.toString().split('');
        numArray[0] = Number(ele[0]);
    }

    if (numArray[0] === 0) {
        return console.log(1);
    }

    if (numArray.length < 2) {
        numArray[1] = 0;
    }

    oldNumber[0] = numArray[1];
    oldNumber[1] = numArray[0] + numArray[1];

    cycle += 1;

    if (oldNumber[1] > 9) {
        oldNumber[1] = Number(oldNumber[1].toString().split('')[1]);
    }

    // 더하기 사이클
    for (let i = 0; i < 100; i++) {

        newNumber[0] = oldNumber[1];
        newNumber[1] = oldNumber[0] + oldNumber[1];


        if (newNumber[1] > 9) {
            newNumber[1] = Number(newNumber[1].toString().split('')[1]);
        }

        cycle += 1;

        if(newNumber[0] === numArray[0] && newNumber[1] === numArray[1]) {
            return console.log(cycle);
        }

        oldNumber = newNumber;
        newNumber = [0, 0];

    }
}

addCycle(0);