'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Membership.belongsTo(models.User, { foreignKey: 'userId', as:'user' });
      Membership.hasOne(models.DiscountCoupon, { foreignKey: 'membershipId', as:'discountCoupon' });
    }
  }
  Membership.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    image: DataTypes.BLOB,
    discount: DataTypes.INTEGER,
    validation: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};