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
      OrderDetail.belongsToMany(models.Product, { through: 'ProductOrderDetail', foreignKey: 'productId', as:'products' });
      OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId', as:'order' });
    }
  }
  OrderDetail.init({
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