const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Cart = sequelize.define('carts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
            isFloat: true,
            isNumeric: true
        }
    },
    userId: {
        type: DataTypes.UUID,
    },
    itemId: {
        type: DataTypes.UUID
    },
    discountCouponId: {
        type: DataTypes.UUID
    },
    status: {
        type: DataTypes.ENUM('active', 'abandoned', 'completed'),
        validate: {
            isIn: [['active', 'abandoned', 'completed']]
        }
    }
});

// relaciones
// usuario (1-1), item del carrito (1-N), cupon de descuento (N-1)

module.exports = Cart;