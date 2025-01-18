const Order = require('../models/Order');
const Product = require('../models/Product');
const OrderDetail = require('../models/OrderDetail');

// relacion orden - detalle de orden (1-1)
Order.hasOne(OrderDetail, { foreignKey: 'orderId', as: 'orders'});
OrderDetail.belongsTo(Order, { foreignKey: 'OrderDetailId', as: 'details'});

// relacion producto - detalle de orden (N-N)
Product.belongsToMany(OrderDetail, { through: 'ProductOrderDetail', foreignKey: 'productId', as: 'products', otherKey: 'orderDetailId' });
OrderDetail.belongsToMany(Product, { through: 'ProductOrderDetail', foreignKey: 'orderdetailId', as: 'orders', otherKey: 'productId' });


module.exports = { Order, Product, OrderDetail };
