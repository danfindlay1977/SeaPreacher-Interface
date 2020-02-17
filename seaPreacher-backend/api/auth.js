const express = require("express");
const api = express.Router();
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
let user = {
  secretbase32: null
};
let auth = false;

api.get("/", (req, res) => {
  const secret = speakeasy.generateSecret();
  user.secretbase32 = secret.base32;
  qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
    res.json({ url: data_url });
  });
});

api.post("/", (req, res) => {
  console.log(user.secretbase32);
  console.log(req.body.user.userPin);
  const secretbase32 = user.secretbase32;
  const userToken = req.body.user.userPin;
  const verfied = speakeasy.totp.verify({
    secret: secretbase32,
    encoding: "base32",
    token: userToken
  });
  if (verfied) auth = true;
  res.json({ auth: verfied });
});

console.log("in auth");

module.exports = api;
