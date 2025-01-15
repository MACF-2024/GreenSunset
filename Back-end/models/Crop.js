const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Crop = sequelize.define('Crop', {
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
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id'
        }
    }
});

// relaciones
// producto (N-1)

// relacion cultivo - producto (1-N)
// Crop.hasMany(Product, { foreignKey: 'productId', as: 'product' });
// Product.belongsTo(Crop, { foreignKey: 'cropId', as: 'crop' });

module.exports = Crop;