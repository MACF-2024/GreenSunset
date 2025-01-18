const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../db-sequelize');

const Ranking = sequelize.define('rankings', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    ranking: {
        type: DataTypes.ENUM('uno', 'dos', 'tres', 'cuatro', 'cinco'),
        validate: {
            isIn: [['uno', 'dos', 'tres', 'cuatro', 'cinco']],
            notEmpty: true
        }
    },
    productId: {
        type: DataTypes.UUID
    },
    userId: {
        type: DataTypes.UUID
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