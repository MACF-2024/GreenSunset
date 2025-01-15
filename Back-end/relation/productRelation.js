const DiscountCoupon = require('../models/DiscountCoupon');
const Crop = require('../models/Crop');
const Effect = require('../models/Effect');
const Variety = require('../models/Variety');
const Comment = require('../models/Comment');
const Ranking = require('../models/Ranking');
const Taste = require('../models/Taste');
const Product = require('../models/Product');
const Favorite = require('../models/Favorites');


// relacion cupon de descuanto - producto (1-N)
DiscountCoupon.hasMany(Product, { foreignKey: 'productId', as: 'product' });
Product.belongsTo(DiscountCoupon, { foreignKey: 'discountCouponId', as: 'coupon' });

// relacion efecto - producto (N-N)
Effect.belongsToMany(Product, { through: 'ProductEffect', foreignKey: 'productId', as: 'product', otherKey: 'effectId' });
Product.belongsToMany(Effect, { through: 'ProductEffect', foreignKey: 'effectId', as: 'effect', otherKey: 'productId' });

// relacion variedad - producto (N-N)
Variety.belongsToMany(Product, { through: 'ProductVariety', foreignKey: 'productId', as: 'product', otherKey: 'varietyId' });
Product.belongsToMany(Variety, { through: 'ProductVariety', foreignKey: 'varietyId', as: 'variety', otherKey: 'productId' });

// relacion comentario - producto (N-1)
Comment.hasMany(Product, { foreignKey: 'productId', as: 'product' });
Product.belongsTo(Comment, { foreignKey: 'commentId', as: 'comment' });

// relacion ranking - producto (N-1)
Ranking.hasMany(Product, { foreignKey: 'productId', as: 'product' });
Product.belongsTo(Ranking, { foreignKey: 'rankingId', as: 'ranking' });

// relacion sabor - producto (N-N)
Taste.belongsToMany(Product, { through: 'ProductTaste', foreignKey: 'productId', as: 'product', otherKey: 'tasteId' });
Product.belongsToMany(Variety, { through: 'ProductTaste', foreignKey: 'tasteId', as: 'taste', otherKey: 'productId' });

// relacion cultivo - producto (1-N)
Crop.hasMany(Product, { foreignKey: 'productId', as: 'product' });
Product.belongsTo(Crop, { foreignKey: 'cropId', as: 'crop' });

// relacion sabor - producto (N-N)
Favorite.belongsToMany(Product, { through: 'ProductFavorite', foreignKey: 'productId', as: 'product', otherKey: 'favoriteId' });
Product.belongsToMany(Favorite, { through: 'ProductFavorite', foreignKey: 'favoriteId', as: 'favorite', otherKey: 'productId' });

module.exports = { DiscountCoupon, Crop, Taste, Product, Effect, Variety, Comment, Ranking, Favorite };
