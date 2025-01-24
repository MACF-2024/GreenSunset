'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ranking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ranking.belongsTo(models.Product, { foreignKey: 'productId', as:'products' });
      Ranking.belongsTo(models.User, { foreignKey: 'userId', as:'users' });
    }
  }
  Ranking.init({
    ranking: DataTypes.ENUM('uno','dos','tres','cuatro','cinco','sin'),
    productId: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Ranking',
  });
  return Ranking;
};