const { Membership, User, DiscountCoupon } = require('../models');

const membershipCreate = async (req, res) => {
    const { name, price, description, userId } = req.body;
    try {
        const membership = await Membership.create({
            name,
            price,
            description,
            userId
        });

        if (!membership) return res.status(404).json({ error: 'La membresia no fue creada' });

        res.status(200).json({ message: 'La membresia fue creada correctamente', post: membership });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la membresia', details: error.message });
    }
};

const membershipAll = async (req, res) => {
    try {
        const memberships = await Membership.findAll({
            include: {
                model: DiscountCoupon,
                as: 'discountCoupon',
                attributes: ['id', 'discount']
            }
        });

        if (!memberships) return res.status(404).json({ error: 'Error al mostrar las membresias' });

        res.status(200).json({ message: 'Todas las membresias creadas', get: memberships})
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las membresia', details: error.message });
    }
};

const membershipById = async (req, res) => {
    const { id } = req.params;
    try {
        const membership = await Membership.findByPk(id, {
            include: {
                model: DiscountCoupon,
                as: 'discountCoupon',
                attributes: ['id', 'discount']
            }
        });

        if (!membership) return res.status(404).json({ error: 'Error al encontrar la membresia' });

        res.status(200).json({ message: 'Se obtuvo la membresia', get: membership });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la membresia', details: error.message });
    }
};

const membershipUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, price, discount, image, description } = req.body;
    try {
        const [updated] = await Membership.update({
            name,
            price,
            discount,
            image,
            description
        }, { where: { id } });

        if (!updated) return res.status(404).json({ error: 'No se actualizo la membrecia' });

        const updatedId = await Membership.findByPk(id)
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: updatedId })
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la membresia', details: error.message });
    }
};

const membershipDelete = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await Membership.update({ validation }, { where: { id } });
        if (!updated) return res.status(404).json({ error: 'Membresia no encontrada' });

        const membership = await Membership.findByPk(id);
        if (membership.validation === false) return res.status(200).json({ message: `Membresia ${membership.name} dada de baja` });

        res.status(200).json({ message: `Membresia ${membership.name} activada` });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la membresia', details: error.message });
    }
};

module.exports = {
    membershipCreate,
    membershipAll,
    membershipById,
    membershipUpdate,
    membershipDelete
};