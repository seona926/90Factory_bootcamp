const express = require("express");
const app = express();
const port = 3000;
const ctrl = require("./app/src/routes/ctrl");
const bp = require('body-parser');
const { Router } = require("express");
const db = require("./app/src/config/db");
const calculator = require("./app/src/models/calculator");
const UserStorage = require("./app/src/models/UserStorage");


app.set("port", port);
app.set('views', __dirname + '/app/src/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(express.static(`${__dirname}/app/src/public`));
app.use(bp.json());
app.use(bp.urlencoded({ extended : true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/parking", (req, res) => {
  res.render("parking.ejs");
});

// get car infomation
selectCarInfo().then(carNumber => {
  console.log('carNumber:', carNumber);
});

app.get("/payment", async (req, res) => {
  const results = await selectCarInfo();
  const time = calculator.timeCalculator(results["in_datetime"], results["out_datetime"]);
  const totalPrice = calculator.totalCalculator(time);
  res.render("payment.ejs", { carNumber: results["car_number"], time: time, totalprice: totalPrice});
});

app.get("/payment", (req, res) => {
  res.send("");
})

// app.get("/discount", (req, res) => {
//   res.send(req.query.discount);
// })


// // 여러 인자를 반환할 때
// app.get("/payment", async (req, res) => {
//   const results = await selectCarInfo(); //we get the results
//   const result_second_query = await functionForSecondQuery();
//   res.render("payment.ejs", { carNumber: results["car_number"], in: results["in_datetime"], out: results["out_datetime"] });
// });


app.get("/finished", (req,res) => {
  res.render("finished.ejs");
});
app.get("/buyseason", (req, res) => {
  res.render("buySeason.ejs");
})
app.get("/season-pay-finished", (req, res) => {
  res.render("seasonPayFinished.ejs");
})

app.post("/index", ctrl.process.register);
app.post("/parking", async (req, res) => {
});
app.post("/finishparking", ctrl.process.out);
app.post("/payment", async (req, res) => {
  await ctrl.process.payment(req, res);
  console.log('차넘버:',req.body["carNumber"]);
  const freecarList = await getFreeCar();
  const seasoncarList = await getSeasonCar();
  if (freecarList.indexOf(req.body["carNumber"]) != - 1 || seasoncarList.indexOf(req.body["carNumber"]) != - 1) {
    res.send("free");
  } else { 
    res.send("pay");
  }
});

app.post("/season", ctrl.process.season);
app.post("/season", (req, res) => {

})


app.listen(port, () => console.log("Listening on", port));

module.exports = app;