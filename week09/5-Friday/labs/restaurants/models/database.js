let config = {
    host: 'localhost',
    port: 5432,
    database:'restaurants-nov2020cohort',
    user:'postgres',
    password: 'mattJAVA123!'
};


let pgp = require('pg-promise')();

let db = pgp(config);
module.exports = db;
