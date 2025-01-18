const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Variety = sequelize.define('varietys', {
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

// relacion variedad - producto (N-N)
// Variety.belongsToMany(Product, { through: 'ProductVariety', foreignKey: 'productId', as: 'product', otherKey: 'varietyId' });
// Product.belongsToMany(Variety, { through: 'ProductVariety', foreignKey: 'varietyId', as: 'variety', otherKey: 'productId' });

module.exports = Variety;