'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // producto - sabor (N-N)
      Taste.belongsToMany(models.Product, { through: 'ProductTaste' , foreignKey: 'tasteId', as:'products' });
    }
  }
  Taste.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Taste',
  });
  return Taste;
};