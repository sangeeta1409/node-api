'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};