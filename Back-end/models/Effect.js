const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Effect = sequelize.define('effects', {
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
// producto (N-N)

// relacion efecto - producto (N-N)
// Effect.belongsToMany(Product, { through: 'ProductEffect', foreignKey: 'productId', as: 'product', otherKey: 'effectId' });
// Product.belongsToMany(Effect, { through: 'ProductEffect', foreignKey: 'effectId', as: 'effect', otherKey: 'productId' });


module.exports = Effect;