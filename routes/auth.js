const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
//const mail = require("../helpers/mailer");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {

});

router.get("/signup", (req, res) => {

});

router.post("/signup", (req, res) => {

});

