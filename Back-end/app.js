const express = require('express');
const routerUser = require('./routes/routerUser')
const routerProduct = require('./routes/routerProduct')
const routerMembership = require('./routes/routerMembership')
const routerTaste = require('./routes/routerTaste');
const routerCrop = require('./routes/routerCrop');
const routerVariety = require('./routes/routerVariety');
const routerEffect = require('./routes/routerEffect');
const routerResidence = require('./routes/routerResidence');
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
app.use('/api/crop', routerCrop);
app.use('/api/variety', routerVariety);
app.use('/api/product', routerProduct);
app.use('/api/membership', routerMembership);
app.use('/api/effect', routerEffect);
app.use('/api/residence', routerResidence);

module.exports = app;