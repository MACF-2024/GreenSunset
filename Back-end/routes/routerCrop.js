const express = require('express');
const { 
    cropCreate, 
    cropAll, 
    cropById,
    cropUpdate,
    cropDelete
} = require('../controllers/cropControllers');

const router = express.Router();

router.post('/create', cropCreate);
router.get('/all', cropAll);
router.get('/:id', cropById);
router.put('/update/:id', cropUpdate);
router.delete('/delete/:id', cropDelete);

module.exports = router;