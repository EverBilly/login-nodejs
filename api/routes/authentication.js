const express = require('express')
const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('../../lib/auth')
const router = express()

// SingIn Login Of Users
router.get('/', isNotLoggedIn, (req, res) => {
    res.render('auth/signin')
})
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin')
})

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next)
})

//SingUp Register Of Users
router.get('/signup', isNotLoggedIn, (req, res) => {
     res.render('auth/signup')
})

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/signin')
})

module.exports = router