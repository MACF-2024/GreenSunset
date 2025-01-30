const express = require('express');
const { 
    varietyCreate, 
    varietyAll,
    varietyById,
    varietyUpdate,
    varietyDelete,
} = require('../controllers/varietyControllers');



const router = express.Router();

router.post('/create', varietyCreate);
router.get('/all', varietyAll);
router.get('/:id', varietyById);
router.put('/update/:id', varietyUpdate);
router.delete('/delete/:id', varietyDelete);

module.exports = router;