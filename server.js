const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
require('dotenv').config();

app.get("/", (req, res) => {
  res.send("Welcome to our hotel!!");
});


const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menu', menuRoutes)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
