const Order = require('../models/Order');
const Residence = require('../models/Residence');
const Membreship = require('../models/Membreship');
const Favorites = require('../models/Favorite');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Ranking = require('../models/Ranking');


// relacion domicilio - usuario (1-1)
Residence.hasOne(User, { foreignKey: 'residenceId', as: 'user' });
User.belongsTo(Residence, { foreignKey: 'residenceId', as: 'residence' });

// relacion membresia - usuario (1-1)
Membreship.hasOne(User, { foreignKey: 'userId', as: 'users' });
User.belongsTo(Membreship, { foreignKey: 'membreshipId', as: 'membreships' });

// relacion orden de compra - usuario (1-1)
Order.hasOne(User, { foreignKey: 'userId', as: 'users' });
User.belongsTo(Order, { foreignKey: 'orderId', as: 'orders' });

// relacion favoritos - usuario (N-1)
Favorites.hasMany(User, { foreignKey: 'favoriteId', as: 'favorites' });
User.belongsTo(Favorites, { foreignKey: 'userId', as: 'users' });

// relacion comentario - usuario (N-1)
Comment.hasMany(User, { foreignKey: 'commentId', as: 'comments' });
User.belongsTo(Comment, { foreignKey: 'userId', as: 'users' });

// relacion ranking - producto (N-1)
Ranking.hasMany(User, { foreignKey: 'userId', as: 'users' });
User.belongsTo(Ranking, { foreignKey: 'rankingId', as: 'rankings' });



module.exports = { Order, Membreship, Residence, Favorites, User, Comment, Ranking };