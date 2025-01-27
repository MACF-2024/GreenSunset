const express = require('express');
const { 
    userCreate,
    userAll,
    userById,
    userUpdate,
    userDeleted,
    userLogin,
    userUpdatePassword
} = require('../controllers/userControllers');

const router = express.Router();


router.post('/create', userCreate);
router.post('/login', userLogin);
router.get('/all', userAll);
router.get('/:id', userById);
router.put('/update/:id', userUpdate);
router.put('/update-password/:id', userUpdatePassword);
router.put('/delete/:id', userDeleted);


module.exports = router;