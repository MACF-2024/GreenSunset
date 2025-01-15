const { DataTypes } = require('sequelize');
const { v4:uuidv4 } = require('uuid');
const sequelize= require('../db-sequelize');

const Favorite = sequelize.define('Favorite', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
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
// usuario (1-N), productos (N-N)

// relacion favoritos - usuario (N-1)
// Favorites.hasMany(User, { foreignKey: 'favoriteId', as: 'favorite' });
// User.belongsTo(Favorites, { foreignKey: 'userId', as: 'user' });

// relacion sabor - producto (N-N)
// Favorite.belongsToMany(Product, { through: 'ProductFavorite', foreignKey: 'productId', as: 'product', otherKey: 'favoriteId' });
// Product.belongsToMany(Favorite, { through: 'ProductFavorite', foreignKey: 'favoriteId', as: 'favorite', otherKey: 'productId' });



module.exports = Favorite;