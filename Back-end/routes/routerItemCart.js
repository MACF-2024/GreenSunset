const express = require('express');
const { 
    itemCartCreate, 
    itemCartAll, 
    itemCartById,
    itemCartUpdate,
    itemCartDelete,
    removeItemCartFromProduct,
    addItemCartToProduct
} = require('../controllers/itemCartControllers');

const router = express.Router();

router.post('/create/:cartId', itemCartCreate);
router.post('/:id/product/:productId', addItemCartToProduct);
router.get('/all/:cartId', itemCartAll);
router.get('/:id', itemCartById);
router.put('/update/:id', itemCartUpdate);
router.delete('/:id/product/:productId', removeItemCartFromProduct);
router.delete('/delete/:id', itemCartDelete);

module.exports = router;