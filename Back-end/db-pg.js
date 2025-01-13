const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER || 'username',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'base_de_datos',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || 5432, 
});

pool.connect()
    .then(() => console.log('Conexion exitosa'))
    .catch(err => console.error('Error en conexion', err));

module.exports = pool;