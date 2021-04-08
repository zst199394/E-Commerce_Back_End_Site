// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
  
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Product.belongsToMany(Tag,{
//   through: {
//     model: ProductTag,
//     unique: false
//   },
//   as: 'product_id',
// });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
// Tag.belongsToMany(Product,{
//   through: {
//     ProductTag,
//     unique: false
//   },
//   as:'tag_id',
// })
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
