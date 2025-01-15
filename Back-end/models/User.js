const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const User = sequelize.define('User', {
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
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    reprocann: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    validation: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    residenceId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Redidence',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Order',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    membreshipId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Membreship',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    favoritesId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Favorites',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    }
});

// relaciones
// domicilio (1-1), carrito (1-1), membresias (1-N), ordenes (1-1), favoritos (1-1), comentario (N-1)

// relacion usuario - carrito (1-1)
// User.hasOne(Cart, { foreignKey: 'userId', as: 'cart' });
// Cart.belongsTo(User, { foreignKey: 'cartId', as: 'user' });


module.exports = User;