const Order = require('../models/Order');
const Product = require('../models/Product');
const OrderDetail = require('../models/OrderDetail');

// relacion orden - detalle de orden (1-1)
Order.hasOne(OrderDetail, { foreignKey: 'orderId', as: 'order'});
OrderDetail.belongsTo(Order, { foreignKey: 'OrderDetailId', as: 'detail'});

// relacion producto - detalle de orden (N-1)
Product.hasMany(OrderDetail, { foreignKey: 'productId', as: 'product' });
OrderDetail.belongsTo(Product, { foreignKey: 'orderdetailId', as: 'order' });


module.exports = { Order, Product, OrderDetail };
