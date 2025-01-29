const express = require('express');
const routerUser = require('./routes/routerUser')
const routerProduct = require('./routes/routerProduct')
const routerMembership = require('./routes/routerMembership')
const routerTaste = require('./routes/routerTaste');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//Middleware
app.use(express.json());
app.use(helmet()); // Configura encabezado de seguridad
app.use(cors()); // permite solicitudes desde diferentes origenes
app.use(morgan('dev')); // Logs de solicitudes HTTP en desarrollo


// Rutas
app.use('/api/user', routerUser);
app.use('/api/taste', routerTaste);
app.use('/api/product', routerProduct);
app.use('/api/membership', routerMembership);

module.exports = app;