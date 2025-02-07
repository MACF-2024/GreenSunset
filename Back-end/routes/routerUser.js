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
    userGetCommentAndRanking
} = require('../controllers/userControllers');

const router = express.Router();


router.post('/create', userCreate);
router.post('/login', userLogin);
router.post('/:id/product/:productId', addProductToUser);
router.get('/all', userAll);
router.get('/:id', userById);
router.get('/favorite/:id', userGetFavorite);
router.get('/comment/:id', userGetCommentAndRanking);
router.put('/:id/residence/:residenceId', addResidenceToUser);
router.put('/update/:id', userUpdate);
router.put('/update-password/:id', userUpdatePassword);
router.put('/delete/:id', userDeleted);
router.delete('/:id/product/:productId', removeProductFromUser);


module.exports = router;