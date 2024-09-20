"use strict";

var _jsonwebtoken = require("jsonwebtoken");
var config = {
  secrets: {
    jwt: "PJaHvt8ASQvFgSgYI2gyc8a9TdHzLh5Rx98s7aB4nhUz4rvW92zsKvN6zbPIubasasassa",
    jwtExp: "30d"
  }
};
var createToken = function createToken(user) {
  return (0, _jsonwebtoken.sign)({
    _id: user._id,
    phone: user.phone
  }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  });
};
module.exports = {
  createToken: createToken,
  config: config
};