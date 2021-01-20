const express = require("express");
const app = express();



app.set("view engine" , 'ejs');
app.use(express.static("public"));

//routes
app.use(require("./routes/dishes"));
app.use(require("./routes/newDish"));

app.listen(3000, ()=>{
console.log(`3000`)
})
