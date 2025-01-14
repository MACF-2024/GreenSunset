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
        allowNull: true,
        references: {
            model: 'Redidence',
            key: 'id'
        }
    },
    cartId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Cart',
            key: 'id'
        }
    },
    orderId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Order',
            key: 'id'
        }
    },
    membreshipId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Membreship',
            key: 'id'
        }
    },
    favoritesId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Favorites',
            key: 'id'
        }
    }
});

// relaciones
// domicilio, carrito, membresias, ordenes, favoritos

module.exports = User;