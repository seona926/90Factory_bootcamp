"use strict";

const stopParkingBtn = document.querySelector(".stop-parking");
const params = new URLSearchParams(window.location.search);
const carnumber = params.get('carnumber');

stopParkingBtn.addEventListener("click", payment);


function payment() {
	const req = {
		carNumber: carnumber
	};

	fetch("/parking", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(req),
	})
	.then((result) => result.text())
	.then((res) => {
		console.log('res:', res);
			// if (res === "pay") {
			// 	location.href = "/payment";
			// } else if (res === "free") {
			// 	location.href = "/finished";
			// }
	})
	.catch((err) => {
		console.error("출차 중 에러 발생");
	})
}