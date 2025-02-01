const express = require('express');
const { 
    itemCartCreate, 
    itemCartAll, 
    itemCartById,
    itemCartUpdate,
    itemCartDelete
} = require('../controllers/itemCartControllers');

const router = express.Router();

router.post('/create/:cartId', itemCartCreate);
router.get('/all', itemCartAll);
router.get('/:id', itemCartById);
router.put('/update/:id', itemCartUpdate);
router.delete('/delete/:id', itemCartDelete);

module.exports = router;