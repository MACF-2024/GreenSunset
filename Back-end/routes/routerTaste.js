const express = require('express');
const { 
    tasteCreate,
    tasteAll, 
    tasteById,
    tasteUpdate,
    tasteDelete,
    addTasteToProduct,
    removeTasteFromProduct
} = require('../controllers/tasteControllers');

const router = express.Router();


router.post('/create', tasteCreate);
router.post('/:id/product/:productId', addTasteToProduct);
router.get('/all', tasteAll);
router.get('/:id', tasteById);
router.put('/update/:id', tasteUpdate);
router.delete('/delete/:id', tasteDelete);
router.delete('/:id/product/:productId', removeTasteFromProduct);


module.exports = router;