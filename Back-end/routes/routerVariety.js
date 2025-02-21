const express = require('express');
const { 
    varietyCreate, 
    varietyAll,
    varietyById,
    varietyUpdate,
    varietyDelete,
    addVarietyToProduct,
    removeVarietyFromProduct,
} = require('../controllers/varietyControllers');



const router = express.Router();

router.post('/create', varietyCreate);
router.post('/:id/product/:productId', addVarietyToProduct);
router.get('/all', varietyAll);
router.get('/:id', varietyById);
router.put('/update/:id', varietyUpdate);
router.delete('/:id/delete/:productId', removeVarietyFromProduct);
router.delete('/delete/:id', varietyDelete);

module.exports = router;