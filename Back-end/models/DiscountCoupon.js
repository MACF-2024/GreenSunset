const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const DiscountCoupon = sequelize.define('DiscountCoupon', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id'
        }
    }
});

// relaciones
// productos

module.exports = DiscountCoupon;