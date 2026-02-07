const router = require('express').Router();
const controller = require('../controllers/product.controller');

router.post('/', controller.createProduct);
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

router.patch('/:id/decrease-stock', controller.decreaseStock);
router.patch('/:id/review', controller.addReview);
router.patch('/:id/review/remove', controller.removeReview);

module.exports = router;
