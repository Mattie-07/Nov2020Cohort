const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended:false}));
router.use(express.json()); // this allows for the body object to be used on the request object. 

router.get("/forum", (req, res) => {

res.render("forum")
})

router.post('/forum' , (req, res) =>{
        res.status(200).json({ name: req.body.name, message: req.body.message}) // remember that the keys are what is sent to the ejs file. 
        // let name = req.body.name;
        // let message = req.body.message;


        // console.log(req.body.name, req.body.message);
        // res.send(`${name} ${message}`)

})

module.exports = router;