const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Taste = sequelize.define('tastes', {
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
    productId: {
        type: DataTypes.UUID
    }
});

// relaciones
// productos (N-N)

// relacion sabor - producto (N-N)
// Taste.belongsToMany(Product, { through: 'ProductTaste', foreignKey: 'productId', as: 'product', otherKey: 'tasteId' });
// Product.belongsToMany(Variety, { through: 'ProductTaste', foreignKey: 'tasteId', as: 'taste', otherKey: 'productId' });

module.exports = Taste;