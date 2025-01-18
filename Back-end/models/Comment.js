const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Comment = sequelize.define('comments', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    comment: {
        type: DataTypes.TEXT('long'),
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.UUID
    },
    productId: {
        type: DataTypes.UUID
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