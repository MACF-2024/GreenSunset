const express = require('express');
const routes = require('./routes/')

const app = express();

//Middleware
app.use(express.json);

// Rutas
app.get('/', routes);

module.exports = app;