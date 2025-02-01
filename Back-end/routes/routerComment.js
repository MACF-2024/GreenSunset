const express = require('express');
const { 
    commentCreate, 
    commentAll, 
    commentById,
    commentUpdate,
    commentDelete
} = require('../controllers/commentControllers');

const router = express.Router();

router.post('/create/:userId/:productId', commentCreate);
router.get('/all', commentAll);
router.get('/:id', commentById);
router.put('/update/:id', commentUpdate);
router.delete('/delete/:id',commentDelete);

module.exports = router;