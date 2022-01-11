"use strict";

const db = require("../config/db");


class UserStorage {
  static async save(userInfo) {
    return new Promise ((resolve, reject) => {
      const query = "INSERT INTO all_car_log(car_number, in_datetime) VALUES(?, ?);";
      const datetime = new Date();
      db.query(query, 
        [userInfo.carNumber, datetime], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async out(userInfo) {
    return new Promise ((resolve, reject) => {
      const query = "UPDATE all_car_log SET out_datetime = ? WHERE car_number = ?";
      const query2 = "SELECT `out` FROM all_car_log WHERE car_number = ? ORDER BY out_datetime DESC limit 1"
      const datetime = new Date();
      db.query(query,
        [datetime, userInfo.carNumber], (err) => {
          if (err) reject(`${err}`);
        })
      db.query(query2,
        [userInfo.carNumber], (err, results) => {
          if (err) reject(`${err}`);
          console.log('result:', results[0]['out']);
          resolve( {success : true, msg : results[0]['out'] });
        })
    })
  }

  static async season(userInfo) {
    return new Promise ((resolve, reject) => {
      const query = "INSERT INTO season_car(car_number, start_datetime, end_datetime, user_name, user_phone) VALUES(?, ?, ?, ?, ?)";
      const datetime = new Date();
      db.query(query,
        [userInfo.carNumber, datetime, userInfo.endDatetime, userInfo.name, userInfo.phoneNumber], (err) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        })
    })
  }

  static async payment(userInfo) {
    return new Promise ((resolve, reject) => {
      const query = "SELECT car_number, in_datetime, out_datetime FROM all_car_log WHERE car_number = ? ORDER BY out_datetime DESC limit 1";
      const query2 = "UPDATE `all_car_log` SET `out` = 1 WHERE car_number = ?";
      db.query(query,
        [userInfo.carNumber], (err) => {
          if (err) reject(`${err}`);
        })
      db.query(query2,
        [userInfo.carNumber], (err) => {
          if (err) reject(`${err}`);
        })
        resolve({ success : true });
    })
  }
}

module.exports = UserStorage;