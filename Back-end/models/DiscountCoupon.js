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
      DiscountCoupon.hasMany(models.OrderDetail, { foreignKey: 'discountCouponId', as: 'orderDetails' });
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
    orderDetailId: DataTypes.UUID,
    type: DataTypes.ENUM('membership','order','sin'),
    membershipId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'DiscountCoupon',
  });
  return DiscountCoupon;
};