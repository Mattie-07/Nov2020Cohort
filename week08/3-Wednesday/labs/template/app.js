const express = require("express");
//the express function returns an object which is shown below. 
const app = express();
app.set("view engine",'ejs');
// app.use('views','view') This would be necessary is I called my view folder anything other than view. The first argument would be the  name of the new folder i created.
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.send("Who will win");
})
//subroutes
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})