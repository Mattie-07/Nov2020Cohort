const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/calculator/:num1/:num2' ,(req, res) =>{
    
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let sum = parseInt(num1) + parseInt(num2);
    res.send(`Adding ${req.params.num1} ${req.params.num2} equals ${sum}`)
})

module.exports = router;