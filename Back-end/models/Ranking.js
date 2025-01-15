const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Ranking = sequelize.define('Ranking', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    ranking: {
        type: DataTypes.ENUM('uno', 'dos', 'tres', 'cuatro', 'cinco')
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
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

// relaciones
// usuario (1-N), producto (1-N)

// relacion ranking - producto (N-1)
// Ranking.hasMany(Product, { foreignKey: 'productId', as: 'product' });
// Product.belongsTo(Ranking, { foreignKey: 'rankingId', as: 'ranking' });

// relacion ranking - producto (N-1)
// Ranking.hasMany(User, { foreignKey: 'userId', as: 'user' });
// User.belongsTo(Ranking, { foreignKey: 'rankingId', as: 'ranking' });


module.exports = Ranking;