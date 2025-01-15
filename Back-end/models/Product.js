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
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
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
        allowNull: false,
        references: {
            model: 'Comment',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    rankingId: {
        type: DataTypes.UUID,
        allowNull: false,
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
        allowNull: false,
        references: {
            model: 'DiscountCoupon',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    orderDetailId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'OrderDetail',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    favoriteId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Favorite',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

// relacion
// cupon de descuento (1-N), cultivo (N-N), efecto (N-N), variedad (N-N), comentario (N-1), ranking (N-1), sabor (N-N), detalle de orden

// relacion producto - detalle de orden (N-1)
// Product.hasMany(OrderDetail, { foreignKey: 'productId', as: 'product' });
// OrderDetail.belongsTo(Product, { foreignKey: 'orderdetailId', as: 'order' });


module.exports = Product;