const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().populate('category supplier');
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category supplier');
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};

exports.decreaseStock = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { $inc: { stock: -1 } },
    { new: true }
  );
  res.json(product);
};

exports.addReview = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { $push: { reviews: req.body } },
    { new: true }
  );
  res.json(product);
};

exports.removeReview = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { $pull: { reviews: { user: req.body.user } } },
    { new: true }
  );
  res.json(product);
};
