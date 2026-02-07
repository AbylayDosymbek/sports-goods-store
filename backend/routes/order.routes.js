const router = require('express').Router();
const controller = require('../controllers/order.controller');

router.post('/', controller.createOrder);
router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrderById);
router.delete('/:id', controller.deleteOrder);

module.exports = router;
