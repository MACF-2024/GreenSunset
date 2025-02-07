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
      DiscountCoupon.belongsTo(models.Membership, { foreignKey: 'membershipId', as:'membership' });
    }
  }
  DiscountCoupon.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    discount: DataTypes.INTEGER,
    validation: DataTypes.BOOLEAN,
    productId: DataTypes.UUID,
    type: DataTypes.ENUM('membership','cart','product','sin'),
    cartId: DataTypes.UUID,
    membershipId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'DiscountCoupon',
  });
  return DiscountCoupon;
};