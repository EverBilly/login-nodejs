const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const MySqlStore = require('express-mysql-session')
const passport = require('passport')

const sequelize = require('./database/db');

// Directorio de Rutas
const apiRouter = require('./api/api');
const { Store } = require('express-session');

//Inicializaciones
const app = express();
require('./lib/passport')

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Middleware para rellenar el req.body
app.use(session({
    secret: 'loginnodejs',
    resave: false,
    saveUninitialized: false,
    Store: new MySqlStore(sequelize)
}))
app.use(flash())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Variables Globales
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
})

//Conexion del Servidor
app.listen(app.get('port'), () => {
    console.log('Connected in: ', app.get('port'));
});

// Routes
app.use('/', apiRouter)

module.exports = app;