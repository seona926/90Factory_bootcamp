"use strict";

const paymentBtn = document.querySelector(".payment-btn");
const discountMethod = document.querySelector(".payment-select");


paymentBtn.addEventListener("click", finished);



function finished() {

    fetch("/payment")
    .then((res) => {
        console.log(res)
        if (res.status === 200) {
            location.href = "/finished";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("에러 발생");
    })
}

