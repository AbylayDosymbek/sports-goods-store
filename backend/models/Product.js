
const mongoose = require('mongoose');

module.exports = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  reviews: [{ user: String, rating: Number }]
}));
