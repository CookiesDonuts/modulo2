const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const mail = require("../helpers/mailer");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login",  passport.authenticate("local", {
  successRedirect: "/checkorder",
  failureRedirect: "/auth/login"
}));

router.get("/signup", (req, res) => {
  res.render("signup");

});

router.post("/signup", (req, res) => {
  if(req.body.password !== req.body["password-confirm"]) return res.render("signup", {msg: "Las contraseñas no coinciden"});
  const {username, email, password} = req.body;
  User.register({username, email}, password)
      .then(user => {
          const options = {
              email: user.email,
              subject: "Confirmar correo",
              message: "Por favor confirma tu correo"
          };
          mail.send(options);
          res.redirect("/auth/login")
      })
      .catch(err => {
          res.status(500).render("signup",{err, msg:"No se completó el registro"})
      })
});

router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;

