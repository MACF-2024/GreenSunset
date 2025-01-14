const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Membreship = sequelize.define('Membreship', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: 'Nueva membresia',
        unique: true
    },
    image: {
        type: DataTypes.BLOB('long')
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descount: {
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    validation: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    discountCouponId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'DiscountCoupon',
            key: 'id'
        }
    }
});

// realaciones
// cupones de descuento, usuario


module.exports = Membreship;