const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

//POST route to add a person
router.post("/", async (req, res) => {
    try {
        const data = req.body; // Asuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const savedPerson = await newPerson.save();
        console.log("data saved");
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid work type" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const personID = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(
            personID,
            updatedPersonData,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log("data updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const personID = req.params.id; // Extract the id from the URL parameter
        const response = await Person.findByIdAndDelete(personID);
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log("data delete");
        res.status(200).json({ message: 'Person Deleted Successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
