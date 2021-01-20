
const express = require("express");
const app = express();
const pw = require("./config")
//create a database 
//config info for a database.
//pgpromise


let config = {
    host: 'localhost',
    port: 5432,
    database: 'employees_database',
    user:'postgres',
    password: pw
}

let pgp = require('pg-promise')();
//the return of this function is going to give us access to the database
//which will allos us to perform CRUD operations.
let db = pgp(config);

// console.log(db);

db.query(`SELECT * FROM employees.department`)
.then(records =>{
    console.log(records);

    console.log(records[1].dept_name);
    let arr = records.filter(record =>{
        return record.id == 'd005' // only trying to return the 'development department'
})
// console.log(arr[0].dept_name);
// })
// .catch(error =>{
//     console.log(error);
// // })
// db.one(`SELECT * FROM employees.department WHERE id ='d005'`)
// .then(result =>{
//     console.log(result);
// })
// .catch(error =>{
//     console.log(error)
// })

// db.result(`INSERT INTO restaurant VALUES(DEFAULT, 'Nigerian')`) // this would have worked but I got the error message because the restaurant category had a null value
// .then(result =>{
//     console.log(result);
// })

// db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, ['Romainian'] )



app.listen(3000, (req,res) =>{
    console.log('3000');
})
})