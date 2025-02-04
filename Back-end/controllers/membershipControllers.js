const { Membership, User, DiscountCoupon } = require('../models');

const membershipCreate = async (req,res) => {
    const { name, price, description, userId } = req.body;
    try {
        const membership = await Membership.create({ 
            name,
            price,
            description,
            userId
        });

        return res.status(200).json(membership);
    } catch (error) {
        return res.status(500).json({ error:'Error al crear la membresia', details: error.message });
    }
};

const membershipAll = async (req,res) => {
    try {
        const memberships = await Membership.findAll({
            include: [{
                model: User,
                as: 'user',
                attributes: ['id','username']
            },{
                model: DiscountCoupon,
                as: 'discountCoupon',
                attributes: ['id','discount']
            }]
        });

        if (memberships) return res.status(200).json(memberships)
        else return res.status(404).json({ message: 'Error al mostrar las membresias' })
    } catch (error) {
        return res.status(500).json({ error:'Error al obtener las membresia', details: error.message });
    }
};

const membershipById = async (req,res) => {
    const { id } = req.params;
    try {
        const membreship = await Membership.findByPk(id, {
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'username']
            },{
                model: DiscountCoupon,
                as: 'discountCoupon',
                attributes: ['id','discount']
            }]
        });

        if (membreship) return res.status(200).json(membreship)
        else return res.status(404).json({ message:'Error al encontrar la membresia' })
    } catch (error) {
        return res.status(500).json({ error:'Error al obtener la membresia', details: error.message });
    }
};

const membershipUpdate = async (req,res) => {
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
        
        if(updated) {
            const updatedId = await Membership.findByPk(id)
            return res.status(200).json(updatedId)
        } else {
            return res.status(404).json({ message: 'No se actualizo la membrecia' })
        }
    } catch (error) {
        return res.status(500).json({ error:'Error al actualizar la membresia', details: error.message });
    }
};

const membershipDelete = async (req,res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await Membership.update({ validation },{ where: { id } });

        if (updated) {
            const membreship = await Membership.findByPk(id);
            if (validation) return res.status(200).json({ message:`Membresia ${membreship.name} activa` }) 
            else return res.status(200).json({ message:`Membresia ${membreship.name} dada de baja` })
        } else {
            return res.status(404).json({ error: 'Membresia no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ error:'Error al crear la membresia', details: error.message });
    }
};

module.exports = {
    membershipCreate,
    membershipAll,
    membershipById,
    membershipUpdate,
    membershipDelete
};