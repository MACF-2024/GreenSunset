'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Residence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Residence.hasOne(models.User, { foreignKey: 'residenceId', as:'user' });
    }
  }
  Residence.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    street: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    types: DataTypes.ENUM('house', 'departament', 'other'),
    number: DataTypes.INTEGER,
    location: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Residence',
  });
  return Residence;
};