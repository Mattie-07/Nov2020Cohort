const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json())


router.get("/", (req, res) => {

res.render("index")
})

router.post('/' , (req, res) =>{
        let firstName = req.body.fname;
        let lastName = req.body.lname;


        console.log(req.body.fname, req.body.lname);
        res.send(`${firstName} ${lastName}`)

})

module.exports = router;