const express = require("express")
const app = express();
const router = express.Router();
const feedBackData = require("../data/feedback.json");
const fs = require("fs");
router.use(express.json());
router.use(express.urlencoded({extended:false}));


app.set("view engine", 'ejs');
app.use(express.static("public"));

router.get("/api" , (req,res)  => {
    res.json(feedBackData)

    
})
//router delete allows for information to be deted
router.post("/api" ,(req, res) =>{
    //grab data form request - we would need a body 


    //req.body has the below inside of it 
    //P name: var , title:val, message:val
    feedBackData.unshift(req.body);
    //to be able to write to a file we need to use the fs module.
    fs.writeFile("data/feedback.json" , JSON.stringify(feedBackData) , 'ut8' , (err) =>{

        if(err){
            console.log(err);
        }
    })

    res.json(feedBackData);
    // the fs references the top of the application. meaning the path is from the top going down, not from this file location
    //The bottom is a good reference but wouldnt be needed for this examples.
    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;
    //take current data add new object
    // write to the file feedbackData.json a new object  - so the data will be persisent 
    // which is an array of objects [ {}, {} ,{} , {}]
    //unshift will be able to add object to the beining of the array so the messages will be latest messages on the bottom.
    //we want to be able to add the {name, title, message} - objects
    //we want to keep the messages that have already been on there while adding more messages - with the latest messages on the top. 

})

module. exports = router;