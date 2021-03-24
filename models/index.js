// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_name',
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_name',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag,{
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product,{
  through: {
    ProductTag,
    unique: false
  },
  as:'tag_id',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
