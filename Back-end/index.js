const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

// Iniciar server
app.listen(PORT, () => {
    console.log(`Servidor conectado a http://localhost:${PORT}`);
});
