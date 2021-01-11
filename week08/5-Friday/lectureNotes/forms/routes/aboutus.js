const express = require('express');
const router = express.Router();


router.get("/aboutus", (req, res) => {
    res.send("aboutUs page")
})






module.exports = router;