'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variety extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // producto - variedad (N-N)
      Variety.belongsToMany(models.Product, { through: 'ProductVariety' , foreignKey: 'varietyId', as:'products' });
    }
  }
  Variety.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Variety',
  });
  return Variety;
};