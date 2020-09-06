const express = require('express')
const router = express()

// const passport = require('../../lib/passport')
const passport = require('passport')

router.get('/signup', (req, res) => {
     res.render('auth/signup')
})

// router.post('/signup', (req, res) => {
//     passport.authenticate('local.signup', {
//         successRedirect: '/profile',
//         failureRedirect: '/signup',
//         failureFlash: true
//     })
// })

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

router.get('/profile', (req, res) => {
    res.send('Profile ')
})

module.exports = router