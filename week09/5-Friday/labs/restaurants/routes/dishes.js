const express = require('express');
const router = express.Router();
const dp =  require("../models/database"); // our datase instance - where we can access all of the SQL files

router.get("/dishes" ,(req, res)=>{

    //lets query the databas
    dp.query(`SELECT * FROM restaurants`)
    .then(records => {
        //records an arry of objects [ {} ,{}, {}]
        //will have name food description, ect 
        res.render('dishes' , {
            dishes:records
        });
    })

})
module.exports = router;