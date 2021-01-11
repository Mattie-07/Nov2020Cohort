const express = require("express");
const app = express();
app.set("view engine", 'ejs');
app.use(express.static("public"));


//subroutes
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))


app.listen(3000, () =>{
    console.log(`Listening on port 3000`);
})