const express = require('express');
const { 
    orderDetailCreate,
    orderDetailAll, 
    orderDetailById,
    orderDetailUpdate,
    orderDetailDelete
} = require('../controllers/orderDetailsControllers');

const router = express.Router();

router.post('/create/:orderId', orderDetailCreate);
router.get('/all', orderDetailAll);
router.get('/:id', orderDetailById);
router.put('/update/:id', orderDetailUpdate);
router.delete('/delete/:id', orderDetailDelete);

module.exports = router;