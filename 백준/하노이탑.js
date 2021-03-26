let count = 0;
let move = [];

function hanoi(N, start, via, to) { // N번째 블럭이 start에서 via를 거쳐서 to로 간다
    if (N === 1) {
        move.push([start, to]);
        count += 1;
    } else {
        hanoi(N - 1, start, to, via); // N-1번째 블럭이 start에서 to를 거쳐서 via로 간다
        move.push([start, to]);
        hanoi(N - 1, via, start, to); // N-1번째 블럭이 via에서 start를 거쳐서 to로 간다
        count += 1;
    }
}

hanoi(3, 1, 2, 3);
console.log(count);
move.forEach( ele => console.log(ele[0], ele[1]));
