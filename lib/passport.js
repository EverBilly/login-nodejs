const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const helpers = require('./helpers')
const { Users } = require('../database/db');

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
    done(null, rows[0]);
})