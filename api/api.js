const express = require('express')
const router = express()

// Archivos de rutas
const roles = require('./routes/roles')
const auth = require('./routes/authentication')

//Menu Principal
router.get('/', (req, res) => {
    res.render('auth/signin')
})
router.use('/roles', roles)
router.use('/auth', auth)

module.exports = router