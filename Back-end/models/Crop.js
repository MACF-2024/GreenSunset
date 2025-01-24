'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      // producto - cultivo (N-1)
      Crop.hasMany(models.Product, { foreignKey: 'cropId', as:'products'});
    }
  }
  Crop.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Crop',
  });
  return Crop;
};