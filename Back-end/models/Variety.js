const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Variety = sequelize.define('Variety', {
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

// relacion variedad - producto (N-N)
// Variety.belongsToMany(Product, { through: 'ProductVariety', foreignKey: 'productId', as: 'product', otherKey: 'varietyId' });
// Product.belongsToMany(Variety, { through: 'ProductVariety', foreignKey: 'varietyId', as: 'variety', otherKey: 'productId' });


module.exports = Variety;