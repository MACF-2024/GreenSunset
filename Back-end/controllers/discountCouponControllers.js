const { DiscountCoupon, Cart, Product, Membership } = require('../models');

const discountCouponCreate = async (req, res) => {
    const { discount, cartId, productId, membershipId } = req.body;
    try {
        const discountCoupon = await DiscountCoupon.create({
            discount,
            cartId,
            productId,
            membershipId
        });

        if (!discountCoupon) return res.status(404).json({ error: 'No se creo el Cupon de Descuento' });

        res.status(201).json({ message: 'Se creao correctamente el cupon de descuento', discountCoupon })
    } catch (error) {
        res.status(500).json({ error: 'Error al crear DiscountCoupon', details: error.message });
    }
};

const discountCouponAll = async (req, res) => {
    try {
        const discountCoupon = await DiscountCoupon.findAll({
            attributes: { exclude: ['cartId', 'productId', 'membershipId'] },
            include: [{
                model: Cart,
                as: 'cart',
                attributes: ['id']
            }, {
                model: Product,
                as: 'product',
                attributes: ['id', 'name']
            }, {
                model: Membership,
                as: 'membership',
                attributes: ['id', 'name']
            }]
        });

        if (discountCoupon.length <= 0) return res.status(404).json({ error: 'No se encontraron cupones de descuento creados' });

        res.status(200).json({ message: 'Todos los cupones de descuentos creados', discountCoupon });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener DiscountCoupon', details: error.message });
    }
};

const discountCouponById = async (req, res) => {
    const { id } = req.params;
    try {
        const discountCoupon = await DiscountCoupon.findByPk(id, {
            attributes: { exclude: ['cartId', 'productId', 'membershipId'] },
            include: [{
                model: Cart,
                as: 'cart',
                attributes: ['id']
            }, {
                model: Product,
                as: 'product',
                attributes: ['id', 'name']
            }, {
                model: Membership,
                as: 'membership',
                attributes: ['id', 'name']
            }]
        });

        if (!discountCoupon) return res.status(404).json({ error: 'No se encontro el Cupón de Descuento' });

        res.status(200).json({ message: 'Se obtuvo el cupon de descuento', discountCoupon })
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener DiscountCoupon', details: error.message });
    }
};

const discountCouponUpdate = async (req, res) => {
    const { id } = req.params;
    const { discount, cartId, productId, membershipId } = req.body;
    try {
        const [updated] = await DiscountCoupon.update({
            discount,
            cartId,
            productId,
            membershipId
        }, { where: { id } });

        if (!updated) return res.status(404).json({ error: 'No se actualizo el Cupon de Descuento' });

        const discountCoupon = await DiscountCoupon.findByPk(id, {
            attributes: { exclude: ['cartId', 'productId', 'membershipId'] },
            include: [{
                model: Cart,
                as: 'cart',
                attributes: ['id']
            }, {
                model: Product,
                as: 'product',
                attributes: ['id', 'name']
            }, {
                model: Membership,
                as: 'membership',
                attributes: ['id', 'name']
            }]
        });

        res.status(200).json({ message: 'Se obtuvo el cupon de descuento', discountCoupon });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar DiscountCoupon', details: error.message });
    }
};

const discountCouponValidate = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await DiscountCoupon.update({
            validation
        }, { where: { id } });

        if (!updated) return res.status(404).json({ error: 'No se encontro el Cupon de Descuento' });
        
        const discountCoupon = await DiscountCoupon.findByPk(id);

        if (discountCoupon.validation === false) return res.status(200).json({ message: 'Se elimino el Cupon de Descuento' });

        res.status(200).json({ message: 'Se habilito el Cupon de Descuento' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar DiscountCoupon', details: error.message });
    }
};

module.exports = {
    discountCouponCreate,
    discountCouponAll,
    discountCouponById,
    discountCouponUpdate,
    discountCouponValidate
};