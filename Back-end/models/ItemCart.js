'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemCart.belongsTo(models.Cart, { foreignKey:'cartId', as:'cart' });
      ItemCart.belongsToMany(models.Product, { through:'ItemCartProduct', foreignKey:'itemCartId', as:'products' });
    }
  }
  ItemCart.init({
    quantity: DataTypes.INTEGER,
    cartId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ItemCart',
  });
  return ItemCart;
};