"use strict";
// 유저 데이터 검증 및 조작

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
 
  async register() {
    const client = this.body;
    console.log('register this.body', this.body); // { carNumber: 34가6566 } 출력
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    };
  }

  async out() {
    const client = this.body;
    console.log('out this.body:',this.body);
    try {
      const response = await UserStorage.out(client);
      return response;
    } catch (err) {
      return { success: false, msg: err};
    }
  }

  async season() {
    const client = this.body;
    try {
      const response = await UserStorage.season(client);
      return response;
    } catch (err) {
      return { success: false, msg: err};
    }
  }

  async payment() {
    const client = this.body;
    try {
      const response = await UserStorage.payment(client);
      return response;
    } catch (err) {
      return { success: false, msg: err};
    }
  }
}

module.exports = User;