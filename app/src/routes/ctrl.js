"use strict";

const User = require("../models/User");

const process = {
  register: async (req, res) => {
    const user = new User(req.body);
    // console.log('register req.body', req.body); // { carNumber: 34가2345 } 출력
    const response = await user.register();
    return res.json(response);
  },
  out : async (req, res) => {
    const user = new User(req.body);
    const response = await user.out();
    return res.json(response);
  },
  season: async (req, res) => {
    const user = new User(req.body);
    const response = await user.season();
    return res.json(response);
  }, 
  payment: async (req, res) => {
    const user = new User(req.body);
    const response = await user.payment();
    // return res.json(response);
  } 
};

module.exports = {
  process,
};