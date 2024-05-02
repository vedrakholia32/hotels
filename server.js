const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

app.get("/", (req, res) => {
  res.send("Welcome to our hotel!!");
});


const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menu', menuRoutes)

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
