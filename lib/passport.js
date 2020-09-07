const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const helpers = require('./helpers')
const { Users } = require('../database/db');

// SingIn Login Of Users
passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    console.log(req.body)
    const rows = await Users.findAll({
        where: { username: username }
    })
    if(rows.length > 0){
        const user = rows[0]
        const validPasswod = await helpers.matchPassword(password, user.password)
        if(validPasswod){
            done(null, user, req.flash('success', 'Welcome ' + user.username))
        } else{
            done(null, false, req.flash('message', 'Incorrect Password'))
        }
    } else {
        return done(null, false, req.flash('message', 'The username does not exists'))
    }
}))

//SingUp Register Of Users
passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) =>{
    // console.log(req.body)
    const { fullname } = req.body
    const newUser = {
        username,
        password,
        fullname
    }
        newUser.password = await helpers.encryptPassword(password);
        const result = await Users.create(newUser)
        // console.log(result)
        newUser.id = result.id;
        return done(null, newUser);
    }))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(id, done) => {
    const rows = await Users.findAll({
        where: { id: id}
    })
    done(null, rows[0])
    
})