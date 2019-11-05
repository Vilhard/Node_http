const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

// API Routes
app.use("/api/exercise", require("./routes/api/exercise"));
app.use("/", require("./routes/api/login"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
