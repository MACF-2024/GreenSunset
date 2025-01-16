const { DataTypes } = require('sequelize');
const { v4: uuidv4, validate } = require('uuid');
const sequelize = require('../db-sequelize');

const OrderDetail = sequelize.define('OrderDetail', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Order',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isNumeric: true
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    }
});

// relaciones
// ordenes (1-1), productos (N-1)

module.exports = OrderDetail;