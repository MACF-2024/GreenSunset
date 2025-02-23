const express = require('express');
const { 
    rankingCreate, 
    rankingAll, 
    rankingById,
    rankingUpdate,
    rankingDelete
} = require('../controllers/rankingControllers');

const router = express.Router();

router.post('/create/:userId/product/:productId', rankingCreate);
router.get('/all', rankingAll);
router.get('/:id', rankingById);
router.put('/update/:id', rankingUpdate);
router.delete('/delete/:id', rankingDelete);

module.exports = router;