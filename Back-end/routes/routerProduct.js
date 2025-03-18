const express = require('express');
const { 
    productCreate,
    productAll,
    productById,
    productUpdate,
    productDelete,
    getCommentToProduct,
    getRankingToProduct
} = require('../controllers/productControllers');

const router = express.Router();

router.post('/create/:cropId', productCreate);
router.get('/all', productAll);
router.get('/:id', productById);
router.get('/comments/:id', getCommentToProduct);
router.get('/ranking/:id', getRankingToProduct);
router.put('/update/:id', productUpdate);
router.put('/delete/:id', productDelete);

module.exports = router;