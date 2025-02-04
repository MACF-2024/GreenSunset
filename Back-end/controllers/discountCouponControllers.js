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

        if (discountCoupon) res.status(201).json(discountCoupon)
        else res.status(404).json({ message: 'No se creo el Cupon de Descuento' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear DiscountCoupon', details: error.message });
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
            },{
                model: Product,
                as: 'product',
                attributes: ['id','name']
            },{
                model: Membership,
                as: 'membership',
                attributes: ['id','name']
            }]
        });
        
        if(discountCoupon.length > 0) res.status(200).json(discountCoupon)
        else res.status(404).json({ message:'No se encontraron cupones de descuento creados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener DiscountCoupon', details: error.message });
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
            },{
                model: Product,
                as: 'product',
                attributes: ['id','name']
            },{
                model: Membership,
                as: 'membership',
                attributes: ['id','name']
            }]
        });

        if (discountCoupon) res.status(200).json(discountCoupon)
        else res.status(404).json({ message: 'No se encontro el Cupón de Descuento' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener DiscountCoupon', details: error.message });
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
        },{ where:{ id } });
        
        if(updated) {
            const discountCoupon = await DiscountCoupon.findByPk(id, {
                attributes: { exclude: ['cartId','productId','membershipId'] },
                include: [{
                    model: Cart,
                    as: 'cart',
                    attributes: ['id']
                },{
                    model: Product,
                    as: 'product',
                    attributes: ['id', 'name']
                },{
                    model: Membership,
                    as: 'membership',
                    attributes: ['id', 'name']
                }]
            });
            return res.status(200).json(discountCoupon);
        } else {
            return res.status(404).json({ message:'No se actualizo el Cupon de Descuento' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar DiscountCoupon', details: error.message });
    }
};

const discountCouponDelete = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await DiscountCoupon.update({
            validation
        },{ where:{id} });

        if(updated) {
            const discountCouponV = await DiscountCoupon.findByPk(id)
            if(discountCouponV.validation) res.status(200).json({ message:'Se habilito el Cupon de Descuento' })
            else res.status(200).json({ message:'Se elimino el Cupon de Descuento' });
        } else {
            return res.status(404).json({ message:'No se encontro el Cupon de Descuento' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar DiscountCoupon', details: error.message });
    }
};

module.exports = {
    discountCouponCreate,
    discountCouponAll,
    discountCouponById,
    discountCouponUpdate,
    discountCouponDelete
};