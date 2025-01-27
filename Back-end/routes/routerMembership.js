const express = require('express');
const { 
    membershipCreate, 
    membershipAll, 
    membershipById,
    membershipUpdate,
    membershipDelete
} = require('../controllers/membershipControllers');

const router = express.Router();

router.post('/create', membershipCreate);
router.get('/all', membershipAll);
router.get('/:id', membershipById);
router.put('/update/:id', membershipUpdate);
router.put('/delete/:id', membershipDelete);

module.exports = router;