const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Membreship = sequelize.define('Membreship', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isFloat: true
        }
    },
    discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    validation: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: 'User',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    discountCouponId: {
        type: DataTypes.UUID,
        references: {
            model: 'DiscountCoupon',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

// realaciones
// cupones de descuento (1-1), usuario (1-1)

// relacion membresia - usuario (1-1)
// Membreship.hasOne(User, { foreignKey: 'userId', as: 'user' });
// User.belongsTo(Membreship, { foreignKey: 'membreshipId', as: 'membreship' });

module.exports = Membreship;