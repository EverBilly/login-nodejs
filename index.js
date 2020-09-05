const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const sequelize = require('./database/db');

// Directorio de Rutas
const apiRouter = require('./api/api')

const app = express();

//Motor de Plantillas Engine
app.set('view engine', '.hbs')
//Unir el directorio de las vistas con url del sistema
app.set('views', path.join(__dirname, 'views'))

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware para rellenar el req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Conexion del Servidor
app.listen(app.get('port'), () => {
    console.log('Connected in: ', app.get('port'));
});

// Routes
app.use('/api', apiRouter)

module.exports = app;