const express = require("express");
const router = express.Router();

const path = require("path");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//GET request with query parameters
router.get("/", (req, res) => {
  const name = req.query.name;
  const occupation = req.query.occupation;
  const placeofbirth = req.query.placeofbirth;
  const number1 = req.query.number1;
  const number2 = req.query.number2;
  const submit = req.query.submit;
  res.status(200).json({
    name: name,
    occupation: occupation,
    placeofbirth: placeofbirth,
    number1: number1,
    number2: number2,
    submit: submit
  });
});

// POST method
router.post("/", urlencodedParser, (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  res.send(firstname + " " + lastname + " ");
  //res.sendFile(path.join(__dirname, "../../public", "/post.html"));
});

module.exports = router;
