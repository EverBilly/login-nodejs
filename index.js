const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const sequelize = require('./database/db');

// Directorio de Rutas
const apiRouter = require('./api/api')

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Middleware para rellenar el req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Variables Globales
app.use((req, res, next) => {
    next();
})

//Conexion del Servidor
app.listen(app.get('port'), () => {
    console.log('Connected in: ', app.get('port'));
});

// Routes
app.use('/', apiRouter)

module.exports = app;