const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs'); // we will unencrpyt with this
const db = require("../models")// gives us access to the user model
const config = require('../secrets');//will give us access to the jwt secret 


//we are validating the users credientials with the above code. 
//email, password => local stragety
//either with their email and password or their jwt


// local stratgey 
//email and password below

//options to override username field
let options = {
    usernameField: "email"
}

let localLogin = new LocalStrategy(options, async (email, password, done) =>{
    //check to see if an email is in our db
    try{
        let records = await db.user.findAll({where:{email:email}});// this is an array of objects

        if(records !== null){
            //encrtpy password and compare to db
            bcrypt.compare(password, records[0].password, (err, isMatch) =>{
                //checking to see if err object exists
                if(err){
                return done(err);
                }
                //mismatch passwords
                if(!isMatch){
                    return done(null, false)
                }
                //invalid user
                return done(null, records[0])
            })

        }
        else{
            return done(null, false)
        }
}
    catch(error){
        //no records was found, exit with error
        return done(error)
    }
    });

    let jwtOptions = {
        jwtFromRequest:ExtractJwt.fromHeader('authorization'),
        secretOrKey:config.secret

    }

let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) =>{
    try{
        let user = await db.user.findByPk(payload.sub)
        if(user){
            //successful!
            done(null, user);
        }
        else{
            //ddint find the user
            done(null, false)
        }
    }
    catch(error){
        return done(error)
    }

});

passport.use(localLogin);
passport.use(jwtLogin);
