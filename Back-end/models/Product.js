const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Product = sequelize.define('products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT('long'),
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    like: {
        type: DataTypes.INTEGER
    },
    commentId: {
        type: DataTypes.UUID
    },
    rankingId: {
        type: DataTypes.UUID
    },
    tasteId: {
        type: DataTypes.UUID
    },
    varietyId: {
        type: DataTypes.UUID
    },
    effectId: {
        type: DataTypes.UUID
    },
    cropId: {
        type: DataTypes.UUID
    },
    discount: {
        type: DataTypes.INTEGER
    },
    validation: {
        type: DataTypes.BOOLEAN
    },
    discountCouponId: {
        type: DataTypes.UUID
    },
    orderDetailId: {
        type: DataTypes.UUID
    },
    favoriteId: {
        type: DataTypes.UUID
    },
    itemCartId: {
        type: DataTypes.UUID
    }
});

// relacion
// cupon de descuento (1-N), cultivo (N-N), efecto (N-N), variedad (N-N), comentario (N-1), ranking (N-1), sabor (N-N), detalle de orden (N-N)

// relacion producto - detalle de orden (N-N)
// Product.belongsToMany(OrderDetail, { through: 'ProductOrderDetail', foreignKey: 'productId', as: 'product', otherKey: 'orderDetailId' });
// OrderDetail.belongsToMany(Product, { through: 'ProductOrderDetail', foreignKey: 'orderdetailId', as: 'order', otherKey: 'productId' });


module.exports = Product;