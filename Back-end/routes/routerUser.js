const express = require('express');
const { 
    userCreate,
    userAll,
    userById,
    userUpdate,
    userDeleted,
    userLogin,
    userUpdatePassword,    
    addProductToUser, // FAVORITES
    removeProductFromUser,
    addResidenceToUser,
    userGetFavorite,
    userGetCommentAndRanking,
    userGetOrder,
    checkMembershipStatus
} = require('../controllers/userControllers');

const router = express.Router();


router.post('/create', userCreate);
router.post('/login', userLogin);
router.post('/:id/favorite/:productId', addProductToUser);
router.get('/all', userAll);
router.get('/:id', userById);
router.get('/favorite/:id', userGetFavorite);
router.get('/order/:id', userGetOrder);
router.get('/comment/:id', userGetCommentAndRanking);
router.get('/statusMem/:id', checkMembershipStatus);
router.put('/:id/residence/:residenceId', addResidenceToUser);
router.put('/update/:id', userUpdate);
router.put('/update-password/:id', userUpdatePassword);
router.put('/delete/:id', userDeleted);
router.delete('/:id/delete/:productId', removeProductFromUser);


module.exports = router;