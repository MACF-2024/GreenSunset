const Order = require('../models/Order');
const Residence = require('../models/Residence');
const Membreship = require('../models/Membreship');
const Favorites = require('../models/Favorite');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Ranking = require('../models/Ranking');


// relacion domicilio - usuario (1-1)
Residence.hasOne(User, { foreignKey: 'userId', as: 'user' });
User.belongsTo(Residence, { foreignKey: 'residenceId', as: 'residence' });

// relacion membresia - usuario (1-1)
Membreship.hasOne(User, { foreignKey: 'userId', as: 'user' });
User.belongsTo(Membreship, { foreignKey: 'membreshipId', as: 'membreship' });

// relacion orden de compra - usuario (1-1)
Order.hasOne(User, { foreignKey: 'userId', as: 'user' });
User.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

// relacion favoritos - usuario (N-1)
Favorites.hasMany(User, { foreignKey: 'favoriteId', as: 'favorite' });
User.belongsTo(Favorites, { foreignKey: 'userId', as: 'user' });

// relacion comentario - usuario (N-1)
Comment.hasMany(User, { foreignKey: 'commentId', as: 'comment' });
User.belongsTo(Comment, { foreignKey: 'userId', as: 'user' });

// relacion ranking - producto (N-1)
Ranking.hasMany(User, { foreignKey: 'userId', as: 'user' });
User.belongsTo(Ranking, { foreignKey: 'rankingId', as: 'ranking' });



module.exports = { Order, Membreship, Residence, Favorites, User, Comment, Ranking };