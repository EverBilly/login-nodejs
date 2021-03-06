const express = require('express');
const router = express.Router();
const { Roles } = require('../../database/db');

     
// Listar Todos los Roles
router.get('/list', async(req, res) => {
    await Roles.findAll()
    //   res.json(roles)
    .then(roles => res.status(200).render('roles', {roles}))
})

// Listar Roles por ID
router.get('/:id', async(req, res) => {
    //Funciona con findAll o con findOne
    await Roles.findAll({
        where: { id: req.params.id }
    })
    .then(roles => res.status(200).send(roles))
})

// Crear Roles
router.post('/add', async(req, res) => {
    await Roles.create(req.body)
    // res.json({ mensaje: 'Rol Creado' })
    .then(roles => res.status(201).render('profile',{roles}))
})

// Actualizar Roles
router.put('/:id', async(req, res) => {
    await Roles.update(req.body, {
        where: { id: req.params.id }
    })
    .then(roles => res.status(201).send(roles))
})

// Eliminar Roles
router.delete('/:id', async(req, res) => {
    await Roles.destroy({
        where: { id: req.params.id }
    })
    // res.json({ mensaje: "Rol Eliminado" })
    .then(res.sendStatus(204))
})

module.exports = router;