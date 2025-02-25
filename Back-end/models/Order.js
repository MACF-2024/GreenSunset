'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: 'userId', as:'user' });
      Order.hasMany(models.OrderDetail, { foreignKey: 'orderId', as:'orderDetail' });
    }
  }
  Order.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    total: DataTypes.DECIMAL,
    status: DataTypes.ENUM('pending','paid','shipped','completed','cancelled'),
    userId: DataTypes.UUID,
    membershipId: DataTypes.UUID // DEJARLA SIN RELACION CON MEMBERSHIP (count)
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};