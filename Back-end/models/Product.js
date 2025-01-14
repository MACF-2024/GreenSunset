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
        }
    },
    rankingId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Ranking',
            key: 'id'
        }
    },
    tasteId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Taste',
            key: 'id'
        }
    },
    varietyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Variety',
            key: 'id'
        }
    },
    effectId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Effect',
            key: 'id'
        }
    },
    cropId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Crop',
            key: 'id'
        }
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
        }
    },
});

// relacion
// cupon de descuento, cultivo, efecto, variedad, comentario, ranking, sabor

module.exports = Product;