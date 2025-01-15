const Membreship = require('../models/Membreship');
const DiscountCoupon = require('../models/DiscountCoupon');


// relacion membresia - cupon de descuento (1-1)
Membreship.hasOne(DiscountCoupon, { foreignKey: 'membreshipId', as: 'membreship' });
DiscountCoupon.hasOne(Membreship, { foreignKey: 'discountCouponId', as: 'coupon' });

module.exports = { Membreship, DiscountCoupon }
