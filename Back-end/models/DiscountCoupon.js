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
        defaultValue: 0
    },
    productId: {
        type: DataTypes.UUID,
        references: {
            model: 'Product',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    cartId: {
        type: DataTypes.UUID,
        references: {
            model: 'Cart',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    mebreshipId: {
        type:DataTypes.UUID,
        references: {
            model: 'Membreship',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

// relaciones
// productos (1-N), carrito (1-N), membresia (1-N)

// relacion cupon de descuento - carrito (1-N) ---> CREADO (cartRelation.js)
// DiscountCoupon.hasOne(Cart, { foreignKey: 'discountCouponId', as: 'coupon' });
// Cart.belongsTo(DiscountCoupon, { foreignKey: 'cartId', as: 'discountCart' });

// relacion cupon de descuanto - producto (1-N)
// DiscountCoupon.hasOne(Product, { foreignKey: 'productId', as: 'product' });
// Product.belongsTo(DiscountCoupon, { foreignKey: 'discountCouponId', as: 'coupon' });

// relacion membresia - cupon de descuento (1-1)
// Membreship.hasOne(DiscountCoupon, { foreignKey: 'membreshipId', as: 'membreship' });
// DiscountCoupon.belongTo(Membreship, { foreignKey: 'discountCouponId', as: 'coupon' });

module.exports = DiscountCoupon;