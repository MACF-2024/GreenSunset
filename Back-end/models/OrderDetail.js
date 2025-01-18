const { DataTypes } = require('sequelize');
const { v4: uuidv4, validate } = require('uuid');
const sequelize = require('../db-sequelize');

const OrderDetail = sequelize.define('orderDetails', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    orderId: {
        type: DataTypes.UUID
    },
    productId: {
        type: DataTypes.UUID
    },
    quantity: {
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: true
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    }
});

// relaciones
// ordenes (1-1), productos (N-1)

module.exports = OrderDetail;