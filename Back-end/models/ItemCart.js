const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const ItemCart = sequelize.define('itemCarts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    cartId: {
        type: DataTypes.UUID
    },
    productId: {
        type: DataTypes.UUID
    }
});

// relaciones
// carrito (1-N), producto (N-1)

// relacion item del carrito - carrito (N-1)
// ItemCart.hasMany(Cart, { foreignKey: 'itemId', as: 'cart' });
// Cart.belongsTo(ItemCart, { foreignKey: 'cartId', as: 'itemCart' });

// relacion producto - item de carrito (N-1)
// Product.hasMany(ItemCart, { foreignKey: 'productId', as: 'items' });
// ItemCart.belongsTo(Product, { foreignKey: 'itemCartId', as: 'itemCart' });

module.exports = ItemCart;