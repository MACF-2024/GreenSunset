const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Crop = sequelize.define('crops', {
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
// producto (N-1)

// relacion cultivo - producto (1-N)
// Crop.hasMany(Product, { foreignKey: 'productId', as: 'product' });
// Product.belongsTo(Crop, { foreignKey: 'cropId', as: 'crop' });

module.exports = Crop;