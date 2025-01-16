const Order = require('../models/Order');
const Product = require('../models/Product');
const OrderDetail = require('../models/OrderDetail');

// relacion orden - detalle de orden (1-1)
Order.hasOne(OrderDetail, { foreignKey: 'orderId', as: 'order'});
OrderDetail.belongsTo(Order, { foreignKey: 'OrderDetailId', as: 'detail'});

// relacion producto - detalle de orden (N-N)
Product.belongsToMany(OrderDetail, { through: 'ProductOrderDetail', foreignKey: 'productId', as: 'product', otherKey: 'orderDetailId' });
OrderDetail.belongsToMany(Product, { through: 'ProductOrderDetail', foreignKey: 'orderdetailId', as: 'order', otherKey: 'productId' });


module.exports = { Order, Product, OrderDetail };
