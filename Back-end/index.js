const app = require('./app');
const dotenv = require('dotenv');
const connectToDatabase = require('./db-sequelize');

dotenv.config();

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (err) => {
    console.error('Excepción no capturada:', err);
    process.exit(1); // Salir del proceso con error
});

process.on('unhandledRejection', (reason) => {
    console.error('Rechazo no manejado:', reason);
    process.exit(1);
});

if (process.env.NODE_ENV === 'development') console.log('Servidor corriendo en modo desarrollo')
else console.log('Servidor corriendo en modo producción');


// Iniciar server
connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor conectado a http://localhost:${PORT}`);
        });
    })

