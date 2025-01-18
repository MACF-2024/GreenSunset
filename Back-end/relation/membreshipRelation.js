const Membreship = require('../models/Membreship');
const DiscountCoupon = require('../models/DiscountCoupon');


// relacion membresia - cupon de descuento (1-N)
Membreship.hasOne(DiscountCoupon, { foreignKey: 'membreshipId', as: 'membreships' });
DiscountCoupon.belongsTo(Membreship, { foreignKey: 'discountCouponId', as: 'coupons' });

module.exports = { Membreship, DiscountCoupon }
