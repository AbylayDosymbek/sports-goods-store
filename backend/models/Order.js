
const mongoose = require('mongoose');

module.exports = mongoose.model('Order', new mongoose.Schema({
  user: String,
  items: [{ product: String, quantity: Number }],
  total: Number,
  createdAt: { type: Date, default: Date.now }
}));
