const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
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
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    commentId: {
        type: DataTypes.UUID,
        references: {
            model: 'Comment',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    rankingId: {
        type: DataTypes.UUID,
        references: {
            model: 'Ranking',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    tasteId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Taste',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    varietyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Variety',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    effectId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Effect',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    cropId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Crop',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    validation: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    discountCouponId: {
        type: DataTypes.UUID,
        references: {
            model: 'DiscountCoupon',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    orderDetailId: {
        type: DataTypes.UUID,
        references: {
            model: 'OrderDetail',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    favoriteId: {
        type: DataTypes.UUID,
        references: {
            model: 'Favorite',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    itemCartId: {
        type: DataTypes.UUID,
        references: {
            model: 'ItemCart',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

// relacion
// cupon de descuento (1-N), cultivo (N-N), efecto (N-N), variedad (N-N), comentario (N-1), ranking (N-1), sabor (N-N), detalle de orden (N-N)

// relacion producto - detalle de orden (N-N)
// Product.belongsToMany(OrderDetail, { through: 'ProductOrderDetail', foreignKey: 'productId', as: 'product', otherKey: 'orderDetailId' });
// OrderDetail.belongsToMany(Product, { through: 'ProductOrderDetail', foreignKey: 'orderdetailId', as: 'order', otherKey: 'productId' });


module.exports = Product;