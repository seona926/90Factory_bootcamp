"use strict";

const parkingBtn = document.querySelector(".start-parking");
const stopParkingBtn = document.querySelector(".stop-parking");
const buySeasonBtn = document.querySelector("#buy-season-ticket");
const paymentBtn = document.querySelector("#payment");
const carNumber = document.querySelector("#input-car-number");
const outCarNumber = document.querySelector("#input-car-number-out");

parkingBtn.addEventListener("click", parking);
stopParkingBtn.addEventListener("click", finishParking);
paymentBtn.addEventListener("click", payment);
buySeasonBtn.addEventListener("click", buySeason);

const regex1 = /[가-힣]{2}[\s]*[0-9]{2,3}[\s]*[가-힣]{1}[\s]*[0-9]{4}/gi;
const regex2 =  /[0-9]{2,3}[\s]*[가-힣]{1}[\s]*[0-9]{4}/gi;



function parking() {
    const req = {
        carNumber: carNumber.value
    };

    fetch("/index", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => {
        if (res.status === 200) {
            console.log(carNumber.value);
            if ((carNumber.value).match(regex1) !== null || (carNumber.value).match(regex2) !== null) {
                console.log("올바른 차번호")
                alert("주차를 시작합니다.")
            } else {
                console.log("틀린 차번호")
                alert("올바른 차번호를 입력해주세요");
                
            }
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("주차 중 에러 발생");
    })
}

function buySeason() {
    fetch("/")
    .then((res) => {
        console.log(res)
        if (res.status === 200) {
            location.href = "/buyseason";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("에러 발생");
    })
}

function finishParking() {
    const req = {
        carNumber: outCarNumber.value
    };

    fetch("/finishparking", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.msg !== 1) {
            alert("출차를 요청합니다.")
        } else {
            alert("이미 출차된 차량입니다.");
        }
    })
    .catch((err) => {
        console.error("출차 중 에러 발생");
    })
}

function payment() {
    const req = {
        carNumber: outCarNumber.value
    };

    fetch("/payment", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((result) => result.text())
    .then((res) => {
        if (res === "pay") {
            console.log("결제 페이지 이동")
            location.href = "/payment";
        } else if (res === "free") {
            location.href = "/finished";
        }
    })
    .catch((err) => {
        console.error("에러 발생");
    })
}