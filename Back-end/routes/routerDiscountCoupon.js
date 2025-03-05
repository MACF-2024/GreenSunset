const express = require('express');
const { 
    discountCouponCreate, 
    discountCouponAll,
    discountCouponById,
    discountCouponUpdate,
    discountCouponValidate,
    discountCouponWithProducts, 
} = require('../controllers/discountCouponControllers');

const router = express.Router();

router.post('/create', discountCouponCreate);
router.get('/all', discountCouponAll);
router.get('/:id', discountCouponById);
router.get('/:id/product', discountCouponWithProducts);
router.put('/update/:id', discountCouponUpdate);
router.put('/delete/:id', discountCouponValidate);

module.exports = router;