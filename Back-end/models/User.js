'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Residence, { foreignKey: 'residenceId', as:'residence' });
      User.hasMany(models.Comment, { foreignKey: 'userId', as:'comment' });
      User.hasMany(models.Ranking, { foreignKey: 'userId', as:'ranking' });
      User.hasMany(models.Order, { foreignKey: 'userId', as:'order' });
      User.hasOne(models.Cart, { foreignKey: 'userId', as:'cart' }); 
      User.hasOne(models.Membership, { foreignKey: 'userId', as:'membership' });
      User.belongsToMany(models.Product, { through: 'Favorite', foreignKey: 'userId', as:'favorites' });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    lastName: DataTypes.STRING,
    reprocann: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    image: DataTypes.BLOB,
    membershipStatus: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
    validation: DataTypes.BOOLEAN,
    residenceId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};