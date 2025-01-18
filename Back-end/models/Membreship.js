const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Membreship = sequelize.define('membreships', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
            isFloat: true
        }
    },
    discount: {
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT('long')
    },
    validation: {
        type: DataTypes.BOOLEAN
    },
    userId: {
        type: DataTypes.UUID
    },
    discountCouponId: {
        type: DataTypes.UUID
    }
});

// realaciones
// cupones de descuento (1-1), usuario (1-1)

// relacion membresia - usuario (1-1)
// Membreship.hasOne(User, { foreignKey: 'userId', as: 'user' });
// User.belongsTo(Membreship, { foreignKey: 'membreshipId', as: 'membreship' });

module.exports = Membreship;