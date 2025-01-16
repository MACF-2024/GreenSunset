const { DataTypes, NOW } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    status: {
        type: DataTypes.ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled'),
        defaultValue: 'pending',
        validate: {
            isIn: [['pending', 'paid', 'shipped', 'completed', 'cancelled']]
        }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'User',
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
    createAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updateAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

// realciones
// usuario (1-1), detalle de orden (1-1)

// relacion orden de compra - usuario (1-1)
// Order.hasOne(User, { foreignKey: 'userId', as: 'user' });
// User.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

// relacion orden - detalle de orden (1-1)
// Order.hasOne(OrderDetail, { foreignKey: 'orderId', as: 'order'});
// OrderDetail.belongsTo(Order, { foreignKey: 'OrderDetailId', as: 'detail'});

module.exports = Order;