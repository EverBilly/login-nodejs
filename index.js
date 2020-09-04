const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/db');

//Models
const roles = require('./api/routes/roles');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware para rellenar el req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Conexion del Servidor
app.listen(app.get('port'), () => {
    console.log('Connected in: ', app.get('port'));
});

// Routes
app.use('/api/roles', roles);

module.exports = app;