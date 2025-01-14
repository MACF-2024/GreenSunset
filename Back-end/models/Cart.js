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
        }
    },
    itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'ItemCart',
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
    },
    status: {
        type: DataTypes.ENUM('active', 'abandoned', 'completed'),
        defaultValue: 'abandoned'
    }
});

// relaciones
// usuario, item del carrito, cupon de descuento

module.exports = Cart;