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
            notEmpty: true,
            isAlpha: true
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
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
            notEmpty: true,
            is: /^[a-zA-Z0-9_-]+$/i
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: {msg: 'Email invalido'}
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: {
                args: [8,22],
                msg: 'La contraseña debe tener entre 8 y 22 caracteres'
            }
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
            notEmpty: true,
            isNumeric: true
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
        references: {
            model: 'Order',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    membreshipId: {
        type: DataTypes.UUID,
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
            model: 'Favorite',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    }
});

// relaciones
// domicilio (1-1), carrito (1-1), membresias (1-N), ordenes (1-1), favoritos (1-1), comentario (N-1), ranking (N-1)

// relacion usuario - carrito (1-1)
// User.hasOne(Cart, { foreignKey: 'userId', as: 'cart' });
// Cart.belongsTo(User, { foreignKey: 'cartId', as: 'user' });


module.exports = User;