const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'ItemCart',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    discountCouponId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'DiscountCoupon',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    status: {
        type: DataTypes.ENUM('active', 'abandoned', 'completed'),
        defaultValue: 'abandoned'
    }
});

// relaciones
// usuario (1-1), item del carrito (1-N), cupon de descuento (N-1)

module.exports = Cart;