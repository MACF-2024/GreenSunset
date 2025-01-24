'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Effect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // producto - efecto (N-N)
      Effect.belongsToMany(models.Product, { through: 'ProductEffect' , foreignKey: 'effectId', as:'products' });
    }
  }
  Effect.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Effect',
  });
  return Effect;
};