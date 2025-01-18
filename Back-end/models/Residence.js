const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Residence = sequelize.define('residences', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    street: {
        type: DataTypes.STRING,
        validate: {
            isAlphanumeric: true,
            notEmpty: true
        }
    },
    zipCode: {
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    type: {
        type: DataTypes.ENUM('house', 'departament'),
        validate: {
            isIn: [['house', 'departament']]
        }
    },
    number: {
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    location: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    province: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.UUID
    }
});

// relaciones
// usuario (1-1)

// relacion domicilio - usuario (1-1)
// Residence.hasOne(User, { foreignKey: 'userId', as: 'user' });
// User.belongsTo(Residence, { foreignKey: 'residenceId', as: 'residence' });

module.exports = Residence;