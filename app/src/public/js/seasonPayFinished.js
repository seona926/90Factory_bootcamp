"use strict";

const homeBtn = document.querySelector(".home-btn");
const params = new URLSearchParams(window.location.search);
const carNumber = params.get('carnumber');
const start = params.get('start');
const end = params.get('end');

let carnumberBlock = document.querySelector("#carnumber");
let startBlock = document.querySelector("#start");
let endBlock = document.querySelector("#end");

console.log(carNumber, start, end);

carnumberBlock.innerHTML = carNumber;
startBlock.innerHTML = start;
endBlock.innerHTML = end;

homeBtn.addEventListener("click", goHome);

function goHome() {
  fetch("/season-pay-finished")
    .then((res) => {
        console.log(res)
        if (res.status === 200) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("에러 발생");
    })
}
