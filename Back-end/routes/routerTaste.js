const express = require('express');
const { 
    tasteCreate,
    tasteAll, 
    tasteById,
    tasteUpdate,
    tasteDelete
} = require('../controllers/tasteControllers');

const router = express.Router();


router.post('/create', tasteCreate);
router.get('/all', tasteAll);
router.get('/:id', tasteById);
router.put('/update/:id', tasteUpdate);
router.delete('/delete/:id', tasteDelete);


module.exports = router;