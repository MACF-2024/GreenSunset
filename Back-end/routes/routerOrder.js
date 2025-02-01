const express = require('express');
const { 
    orderCreate, 
    orderAll, 
    orderById,
    orderUpdate,
    orderDelete
} = require('../controllers/orderControllers');

const router = express.Router();

router.post('/create/:userId', orderCreate);
router.get('/all', orderAll);
router.get('/:id', orderById);
router.put('/update/:id', orderUpdate);
router.delete('/delete/:id', orderDelete);

module.exports = router;