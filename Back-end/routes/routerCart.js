const express = require('express');
const { 
    cartCreate, 
    cartAll, 
    cartById, 
    cartUpdate, 
    cartDelete 
} = require('../controllers/cartControllers');

const router = express.Router();

router.post('/create/:userId', cartCreate);
router.get('/all', cartAll);
router.get('/:id', cartById);
router.put('/update/:id', cartUpdate);
router.delete('/delete/:id', cartDelete);

module.exports = router;