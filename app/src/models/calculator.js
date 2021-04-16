const db = require("../config/db");
const moment = require('moment');

function timeCalculator(inDatetime, outDatetime) {

  const inTime = moment(inDatetime).format("YYYY-MM-DD HH:mm:ss");
  const outTime = moment(outDatetime).format("YYYY-MM-DD HH:mm:ss");

  console.log(inTime, outTime);

  const parkingTime = moment(outTime).diff(moment(inTime), 'minutes');

  return parkingTime;

}

function totalCalculator(parkingTime) {
  const pricePerMin = 100;
  const limitPrice = 30000;
  const totalPrice = parkingTime * pricePerMin;

  console.log(totalPrice);

  // if (totalPrice <= 30000) {
    return totalPrice;
  // } else return limitPrice;

}

// function finalCalculator(totalAmount) {
//   let finalAmount = 0;
//   if(discountMethod.options[discountMethod.selectedIndex].value === "영화 티켓 할인") {
//     finalAmount = totalAmount - 5000;
//   } if (discountMethod.options[discountMethod.selectedIndex].value === "저공해 차량") {
//     finalAmount = totalAmount / 2;
//   }
//   console.log(finalAmount);
//   return finalAmount;
// }

module.exports = { timeCalculator, totalCalculator };