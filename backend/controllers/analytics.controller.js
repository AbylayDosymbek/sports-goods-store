const Order = require('../models/Order');

exports.salesByCategory = async (req, res) => {
  const result = await Order.aggregate([
    { $unwind: '$items' },
    {
      $lookup: {
        from: 'products',
        localField: 'items.product',
        foreignField: '_id',
        as: 'product'
      }
    },
    { $unwind: '$product' },
    {
      $lookup: {
        from: 'categories',
        localField: 'product.category',
        foreignField: '_id',
        as: 'category'
      }
    },
    { $unwind: '$category' },
    {
      $group: {
        _id: '$category.name',
        totalSales: { $sum: '$items.quantity' }
      }
    }
  ]);

  res.json(result);
};

exports.topProducts = async (req, res) => {
  const result = await Order.aggregate([
    { $unwind: '$items' },
    {
      $group: {
        _id: '$items.product',
        sold: { $sum: '$items.quantity' }
      }
    },
    { $sort: { sold: -1 } },
    { $limit: 5 }
  ]);

  res.json(result);
};

exports.monthlyRevenue = async (req, res) => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: { $month: '$createdAt' },
        revenue: { $sum: '$total' }
      }
    },
    { $sort: { '_id': 1 } }
  ]);

  res.json(result);
};
