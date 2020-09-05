const express = require('express')
const router = express()

// Archivos de rutas
const roles = require('./routes/roles')

router.use('/roles', roles)

module.exports = router