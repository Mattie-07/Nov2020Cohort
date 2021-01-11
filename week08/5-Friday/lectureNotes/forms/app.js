const express = require("express")
const app = express();

//public
app.use(express.static("public"));

//
app.set("view engine", "ejs")

//routes
app.use(require("./routes/index"))
app.use(require("./routes/aboutus"))

app.listen(3002, () => {
    console.log("Port 3002");
    
})