const express = require('express');
const router = express()
const { Users } = require('../../database/db')

router.get('/', async(req, res) => {
    res.send('Hola Usuarios')
})

module.exports = router;