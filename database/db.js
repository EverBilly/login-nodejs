const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
    });

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('Conexion Extablecida');
//     });

module.exports = sequelize;