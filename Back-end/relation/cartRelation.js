const User = require('../models/User');
const ItemCart = require('../models/ItemCart');
const DiscountCoupon = require('../models/DiscountCoupon');
const Cart = require('../models/Cart');
const Product = require('../models/Product');


// relacion usuario - carrito (1-1)
User.hasOne(Cart, { foreignKey: 'userId', as: 'cart' });
Cart.belongsTo(User, { foreignKey: 'cartId', as: 'user' });

// relacion item del carrito - carrito (N-1)
ItemCart.hasMany(Cart, { foreignKey: 'itemId', as: 'cart' });
Cart.belongsTo(ItemCart, { foreignKey: 'cartId', as: 'itemCart' });

// relacion cupon de descuento - carrito (1-N)
DiscountCoupon.hasMany(Cart, { foreignKey: 'discountCouponId', as: 'coupon' });
Cart.belongsTo(DiscountCoupon, { foreignKey: 'cartId', as: 'discountCart' });

// relacion producto - item de carrito (N-1)
Product.hasMany(ItemCart, { foreignKey: 'productId', as: 'items' });
ItemCart.belongsTo(Product, { foreignKey: 'itemCartId', as: 'itemCart' });

module.exports = { User, ItemCart, DiscountCoupon, Cart, Product };
