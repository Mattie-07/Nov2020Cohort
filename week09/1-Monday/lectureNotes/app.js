const express = require("express");
const { ppid } = require("process");
const app = express();

app.use(express.static("public"))
app.set("view engine" , "ejs");

app.use(require('./routes'));
app.use(require('./routes/forum'));

app.listen(3000, ()=>{
    console.log("Port 3000");
})