const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Taste = sequelize.define('Taste', {
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
// productos (N-N)

// relacion sabor - producto (N-N)
// Taste.belongsToMany(Product, { through: 'ProductTaste', foreignKey: 'productId', as: 'product', otherKey: 'tasteId' });
// Product.belongsToMany(Variety, { through: 'ProductTaste', foreignKey: 'tasteId', as: 'taste', otherKey: 'productId' });


module.exports = Taste;