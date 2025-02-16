const express = require('express');
const { 
    membershipCreate, 
    membershipAll, 
    membershipById,
    getUserInMembership,
    membershipUpdate,
    membershipDelete
} = require('../controllers/membershipControllers');

const router = express.Router();

router.post('/create/:userId', membershipCreate);
router.get('/all', membershipAll);
router.get('/:id', membershipById);
router.get('/user/:id', getUserInMembership);
router.put('/update/:id', membershipUpdate);
router.put('/delete/:id', membershipDelete);

module.exports = router;