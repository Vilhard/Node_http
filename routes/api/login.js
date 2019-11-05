const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/api/login", (req, res) => {
  const user = req.body.user;
  const pwd = req.body.pwd;

  if ((user == "mark") & (pwd == "giraffe")) {
    res.json({
      user: user,
      pwd: pwd
    });
    res.send(user + " " + pwd + " ");
  } else if (!user || !pwd) {
    res.status(400).send({ msg: "Please include name and password" });
  } else {
    res.status(403).send("Access denied");
  }
});

module.exports = router;
