const express = require('express');
const { 
    effectCreate, 
    effectAll, 
    effectById,
    effectUpdate,
    effectDelete
} = require('../controllers/effectControllers');

const router = express.Router();

router.post('/create', effectCreate);
router.get('/all', effectAll);
router.get('/:id', effectById);
router.put('/update/:id', effectUpdate);
router.delete('/delete/:id', effectDelete);

module.exports = router;