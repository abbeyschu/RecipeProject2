const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idDrinkAPI: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    foodurl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',
  }
);

module.exports = Favorites;