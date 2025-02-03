const express = require('express');
const { 
    effectCreate, 
    effectAll, 
    effectById,
    effectUpdate,
    effectDelete,
    addEffectToProduct,
    removeEffectFromProduct
} = require('../controllers/effectControllers');

const router = express.Router();

router.post('/create', effectCreate);
router.post('/:id/product/:productId', addEffectToProduct);
router.get('/all', effectAll);
router.get('/:id', effectById);
router.put('/update/:id', effectUpdate);
router.delete('/delete/:id', effectDelete);
router.delete('/:id/product/:productId', removeEffectFromProduct);

module.exports = router;