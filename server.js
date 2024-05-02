const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const passport = require("./auth");

app.use(bodyParser.json()); // req.body
require("dotenv").config();

app.use(passport.initialize());
const Authenticate = passport.authenticate("local", { session: false });

app.get("/",(req, res) => {
  res.send("Welcome to our hotel!!");
});

const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/person",Authenticate, personRoutes);
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
