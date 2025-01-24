'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Effect, { through: 'ProductEffect', foreignKey: 'productId', as:'effect' });
      Product.belongsToMany(models.Taste, { through: 'ProductTaste', foreignKey: 'productId', as:'taste' });
      Product.belongsToMany(models.Variety, { through: 'ProductVariety', foreignKey: 'productId', as:'varieties' });
      Product.belongsTo(models.Crop, { foreignKey: 'cropId', as:'crop' });
      Product.hasMany(models.Comment, { foreignKey: 'productId', as:'comment' });
      Product.hasMany(models.Ranking, { foreignKey: 'productId', as:'ranking' });
      Product.belongsToMany(models.User, { through: 'Favorite', foreignKey: 'productId', as:'favoriteProducts' });
      Product.belongsToMany(models.ItemCart, { through: 'ItemCartProduct', foreignKey: 'productId', as:'itemsCart' });
      Product.hasOne(models.DiscountCoupon, { foreignKey: 'productId', as:'discountCoupon' });
      Product.belongsToMany(models.OrderDetail, { through: 'ProductOrderDetail', foreignKey: 'productId', as:'orderDetails' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    image: DataTypes.BLOB,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    validation: DataTypes.BOOLEAN,
    cropId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};