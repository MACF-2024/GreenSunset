const express = require('express');
const { 
    productCreate,
    productAll,
    productById,
    productUpdate,
    productDelete
} = require('../controllers/productControllers');

const router = express.Router();

router.post('/create', productCreate);
router.get('/all', productAll);
router.get('/:id', productById);
router.put('/update/:id', productUpdate);
router.put('/delete/:id', productDelete);

module.exports = router;