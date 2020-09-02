const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/db');

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

//Conexion a la BD
sequelize.sync({ force: false })
    .then(() => {
        console.log('Connected to DataBase');
    }).catch(error => {
        console.log('Error: ', error);
    });