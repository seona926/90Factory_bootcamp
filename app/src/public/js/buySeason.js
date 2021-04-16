"use strict";

const paymentBtn = document.querySelector("#payment-btn");
const carNumber = document.querySelector(".input-car-number");
const userName = document.querySelector(".input-name");
const phoneNumber = document.querySelector(".input-phone-number");
const seasonPeriod = document.querySelector("#select-period");
const endDatetime = new Date();
const startDatetime = new Date();

function date_to_str(format)
{
    var year = format.getFullYear();

    var month = format.getMonth() + 1;
    if(month<10) month = '0' + month;

    var date = format.getDate();
    if(date<10) date = '0' + date;

    var hour = format.getHours();
    if(hour<10) hour = '0' + hour;

    var min = format.getMinutes();
    if(min<10) min = '0' + min;

    var sec = format.getSeconds();
    if(sec<10) sec = '0' + sec;

    return year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
}

let startdate = date_to_str(startDatetime);
let enddate = '';


paymentBtn.addEventListener("click", paySeason);



function paySeason() {
  if (seasonPeriod.options[seasonPeriod.selectedIndex].value === "1개월"){
    endDatetime.setDate(endDatetime.getDate() + 30);
  } else if (seasonPeriod.options[seasonPeriod.selectedIndex].value === "3개월"){
    endDatetime.setDate(endDatetime.getDate() + 90);
  } else if (seasonPeriod.options[seasonPeriod.selectedIndex].value === "6개월"){
    endDatetime.setDate(endDatetime.getDate() + 180);
  }
  enddate = date_to_str(endDatetime);
  
  const req = {
    carNumber: carNumber.value,
    name: userName.value,
    phoneNumber: phoneNumber.value,
    endDatetime: endDatetime,
  };

  fetch("/season", {
      method : "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(req),
  })
  .then((res) => {
      console.log(res)
      if (res.status === 200) {
        location.href = "/season-pay-finished?carnumber=" + carNumber.value + "&start=" + startdate + "&end=" + enddate;
      } else {
          alert(res.msg);
      }
  })
  .catch((err) => {
      console.error("주차 중 에러 발생");
  })
}