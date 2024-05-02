const express = require('express');
const router = express.Router();
const Menu = require("./../models/menu");


router.post("/", async (req, res) => {
    try {
        const data = req.body; // Asuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newMenu = new Menu(data);

        // Save the new person to the database
        const savedMenu = await newMenu.save();
        console.log("data saved");
        res.status(200).json(savedMenu);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/", async (req, res) => {
    try {
        const data = await Menu.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
// comment