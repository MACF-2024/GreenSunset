'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, { foreignKey: 'userId', as:'user' });
      Cart.hasOne(models.DiscountCoupon, { foreignKey: 'cartId', as:'discountCoupon' });
      Cart.hasOne(models.ItemCart, { foreignKey: 'cartId', as:'items' });
    }
  }
  Cart.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    total: DataTypes.DECIMAL,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};