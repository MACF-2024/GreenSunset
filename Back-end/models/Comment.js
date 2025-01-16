const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    comment: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: true
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
// usuario (1-N), producto (1-N)

// relacion comentario - producto (N-1)
// Comment.hasMany(Product, { foreignKey: 'productId', as: 'product' });
// Product.belongsTo(Comment, { foreignKey: 'commentId', as: 'comment' });

// relacion comentario - usuario (N-1)
// Comment.hasMany(User, { foreignKey: 'commentId', as: 'comment' });
// User.belongsTo(Comment, { foreignKey: 'userId', as: 'user' });


module.exports = Comment;