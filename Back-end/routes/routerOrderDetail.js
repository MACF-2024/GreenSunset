const express = require('express');
const { 
    orderDetailCreate,
    orderDetailAll, 
    orderDetailById,
    orderDetailUpdate,
    orderDetailDelete,
    addProductToOrderDetail,
    removeProductFromOrderDetail
} = require('../controllers/orderDetailsControllers');

const router = express.Router();

router.post('/create/:orderId', orderDetailCreate);
router.post('/:id/product/:productId', addProductToOrderDetail);
router.get('/all', orderDetailAll);
router.get('/:id', orderDetailById);
router.put('/update/:id', orderDetailUpdate);
router.delete('/:id/product/:productId', removeProductFromOrderDetail);
router.delete('/delete/:id', orderDetailDelete);

module.exports = router;