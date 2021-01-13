const express = require("express");
const router = express.Router();
let dataFile = require('../data/data.json');

router.get("/feedback", (req, res) => {
    res.render("feedback", {
    pageTitle: "Roux Meetups -Feedback",
    pageID: "feedback",
    artwork: [],
    })
})







module.exports = router;