const express = require('express')
const router = express()

// Archivos de rutas
const roles = require('./routes/roles')
const users = require('./routes/users')
const auth = require('./routes/authentication')

router.use('/usuarios', users)
router.use('/roles', roles)
router.use('/', auth)

module.exports = router