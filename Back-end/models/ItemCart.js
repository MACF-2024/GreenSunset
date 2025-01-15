const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const ItemCart = sequelize.define('ItemCart', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    cartId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Cart',
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