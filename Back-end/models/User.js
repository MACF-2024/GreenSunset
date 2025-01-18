const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const User = sequelize.define('users', {
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
    lastName: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },
    reprocann: {
        type: DataTypes.BOOLEAN
    },
    username: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            is: /^[a-zA-Z0-9_-]+$/i
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            isEmail: {msg: 'Email invalido'}
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            len: {
                args: [8,22],
                msg: 'La contraseña debe tener entre 8 y 22 caracteres'
            }
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    validation: {
        type: DataTypes.BOOLEAN
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    },
    residenceId: {
        type: DataTypes.UUID,
        references: {
            model: 'residences',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
    },
    cartId: {
        type: DataTypes.UUID
    },
    orderId: {
        type: DataTypes.UUID
    },
    membreshipId: {
        type: DataTypes.UUID
    },
    favoritesId: {
        type: DataTypes.UUID
    },
    commentId: {
        type: DataTypes.UUID
    },
    rankingId: {
        type: DataTypes.UUID
    }
});

// relaciones
// domicilio (1-1), carrito (1-1), membresias (1-N), ordenes (1-1), favoritos (1-1), comentario (N-1), ranking (N-1)

// relacion usuario - carrito (1-1)
// User.hasOne(Cart, { foreignKey: 'userId', as: 'cart' });
// Cart.belongsTo(User, { foreignKey: 'cartId', as: 'user' });


module.exports = User;