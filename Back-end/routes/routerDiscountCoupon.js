const express = require('express');
const { 
    discountCouponCreate, 
    discountCouponAll,
    discountCouponById,
    discountCouponUpdate,
    discountCouponDelete, 
} = require('../controllers/discountCouponControllers');

const router = express.Router();

router.post('/create', discountCouponCreate);
router.get('/all', discountCouponAll);
router.get('/:id', discountCouponById);
router.put('/update/:id', discountCouponUpdate);
router.put('/delete/:id', discountCouponDelete);

module.exports = router;