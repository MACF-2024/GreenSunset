const db = require('./models/index');

// require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: 'postgres',
//         logging: false // logs de SQL desactivados
//     }
// );

const connectToDatabase = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Conexion a la base de datos exitosa');

        await db.sequelize.sync({ alter:true });
        console.log('Modelos sincronizados a la base de datos')
    } catch (error) {
        console.error('Error al conectar la base de datos: ', error);
        process.exit(1); // Termina el proceso si no se conecta
    };
};

module.exports = connectToDatabase;