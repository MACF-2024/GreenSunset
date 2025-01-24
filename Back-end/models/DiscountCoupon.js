'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DiscountCoupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DiscountCoupon.belongsTo(models.Product, { foreignKey: 'productId', as:'product' });
      DiscountCoupon.belongsTo(models.Cart, { foreignKey: 'cartId', as:'cart' });
      DiscountCoupon.belongsTo(models.Membership, { foreignKey: 'membershipId', as:'membreship' });
    }
  }
  DiscountCoupon.init({
    discount: DataTypes.INTEGER,
    validation: DataTypes.BOOLEAN,
    productId: DataTypes.UUID,
    cartId: DataTypes.UUID,
    membershipId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'DiscountCoupon',
  });
  return DiscountCoupon;
};