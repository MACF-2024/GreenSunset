const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Effect = sequelize.define('Effect', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: flase,
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
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

// relaciones
// producto (N-N)

// relacion efecto - producto (N-N)
// Effect.belongsToMany(Product, { through: 'ProductEffect', foreignKey: 'productId', as: 'product', otherKey: 'effectId' });
// Product.belongsToMany(Effect, { through: 'ProductEffect', foreignKey: 'effectId', as: 'effect', otherKey: 'productId' });


module.exports = Effect;