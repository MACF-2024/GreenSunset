const express = require('express');
const { 
    residenceCreate, 
    residenceAll, 
    residenceById,
    residenceUpdate,
    residenceDelete
} = require('../controllers/residenceControllers');


const router = express.Router();

router.post('/create', residenceCreate);
router.get('/all', residenceAll);
router.get('/:userId', residenceById);
router.put('/update/:id', residenceUpdate);
router.delete('/delete/:id', residenceDelete);

module.exports = router;