'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsToMany(models.Product, { through: 'ProductOrderDetail', foreignKey: 'orderDetailId', as:'products' });
      OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId', as:'order' });
      OrderDetail.belongsTo(models.DiscountCoupon, { foreignKey: 'discountCouponId', as: 'coupon' });
    }
  }
  OrderDetail.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    orderId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};