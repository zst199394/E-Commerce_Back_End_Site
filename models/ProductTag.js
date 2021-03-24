const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
        unique: false
      }
    }
    // define columns
    // product_id: 1,
    // tag_id: 6,
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;