const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  const { items, user } = req.body;

  let total = 0;

  for (const item of items) {
    const product = await Product.findById(item.product);
    total += product.price * item.quantity;

    await Product.findByIdAndUpdate(
      item.product,
      { $inc: { stock: -item.quantity } }
    );
  }

  const order = await Order.create({
    user,
    items,
    total
  });

  res.json(order);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};

exports.deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: 'Order deleted' });
};
