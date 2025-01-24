'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductOrderDetail.init({
    orderDetailId: DataTypes.UUID,
    productId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ProductOrderDetail',
  });
  return ProductOrderDetail;
};