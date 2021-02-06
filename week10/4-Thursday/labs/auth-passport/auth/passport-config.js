const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');
const passport = require('./passport-instance');
const init = (passport) =>{
    passport.use(new LocalStrategy( async (username, password, done) =>{
        db.user.findAll({where:{username:username}})
        .then(record =>{
            if(record != null){
                let record = records[0]
                bcrypt.compare(password, record.password,(err, response) =>{
                    if(response){
                        //this means a 
                        done(null, {id:record.id , username:record.username})
                    }
                    else{
                        //no session match
                        done(null,false)
                    }
                    
                })
            }
            else{
                //no session for you.
                done(null, false)
            }
        })

    }))

    passport.serializeUser((user, done) =>{
            //passport adding information to the sessions
            //
            done(null, user.id)
    })
    passport.deserializeUser((id, done) =>{
        //checking to see if the user is valid with the cookie that was passed fomr the request
        //find by PY returns an array of records. PK stands for Primary Key
        db.users.findByPk(id)
        .then(record =>{
                done(null,null)
        })
    })

}

module.export = init;