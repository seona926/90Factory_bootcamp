const mysql = require("mysql");

const db = mysql.createConnection({
  host: "logindb.cxbxfamptkwa.ap-northeast-2.rds.amazonaws.com", // AWS 엔드포인트
  user: "admin",
  password: "park1218",
  database: "parkinglot",
  // dateStrings: "date",
});

db.connect();


async function query() {
  return new Promise ((resolve, reject) => {
    const query = "SELECT car_number, in_datetime, out_datetime FROM all_car_log ORDER BY out_datetime DESC limit 1";
    db.query(query, (err, results, fields) => {
      if (err) reject(`${err}`);
      resolve(results);
    });
  });
}

selectCarInfo = async () => { 
  const results = await query();
  return results[0];
}


// //new query, in any file you want, but here is a good place
async function getFreecarQuery() {
  return new Promise ((resolve, reject) => {
    const query = "SELECT * FROM free_car";
    db.query(query, (err, results, fields) => {
      if (err) reject(`${err}`);
      resolve(results);
    });
  });
}

//new function to get data in the other file
getFreeCar = async () => { 
  const results = await getFreecarQuery(); //change this to call the new query function
  let freecarList = [];
  for (let i = 0; i < results.length; i++) {
    freecarList.push(results[i]["car_number"]);
  }
  
  return freecarList;
}


// //new query, in any file you want, but here is a good place
async function getSeasoncarQuery() {
  return new Promise ((resolve, reject) => {
    const query = "SELECT * FROM season_car";
    db.query(query, (err, results, fields) => {
      if (err) reject(`${err}`);
      resolve(results);
    });
  });
}

//new function to get data in the other file
getSeasonCar = async () => { 
  const results = await getSeasoncarQuery(); //change this to call the new query function
  let seasoncarList = [];
  for (let i = 0; i < results.length; i++) {
    seasoncarList.push(results[i]["car_number"]);
  }
  
  return seasoncarList;
}




// //new query, in any file you want, but here is a good place
// async function new_query() {
//   return new Promise ((resolve, reject) => {
//     const query = "put the query here, everything else it's the same";
//     db.query(query, (err, results, fields) => {
//       if (err) reject(`${err}`);
//       resolve(results);
//     });
//   });
// }

// //new function to get data in the other file
// function_name_that_you_like = async () => { 
//   const results = await new_query(); //change this to call the new query function
//   return results[0]; //or any other data you want to return
// }



module.exports = db;