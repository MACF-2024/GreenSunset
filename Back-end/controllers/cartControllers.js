const { Cart, User } = require('../models');

const cartCreate = async (req, res) => {
    const { userId } = req.params;
    const { total } = req.body;
    try {
        const cart = await Cart.create({
            total,
            userId
        });

        if (cart) res.status(201).json(cart)
        else res.status(404).json({ message: 'No se creo el Carrito' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Cart', details: error.message });
    }
};

const cartAll = async (req, res) => {
    try {
        const carts = await Cart.findAll({
            attributes: { exclude: ['userId'] },
            include: {
                model: User,
                as: 'user',
                attributes: ['id','username']
            }
        });
        
        if(carts.length > 0) res.status(200).json(carts)
        else res.status(404).json({ message:'No se encontraron carritos creados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Cart', details: error.message });
    }
};

const cartById = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByPk(id, {
            attributes: { exclude: ['userId'] },
            include: {
                model: User,
                as: 'user',
                attributes: ['id','username']
            }
        });

        if (cart) res.status(200).json(cart)
        else res.status(404).json({ message: 'No se encontro el Carrito' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Cart', details: error.message });
    }
};

const cartUpdate = async (req, res) => {
    const { id } = req.params;
    const { total } = req.body;
    try {
        const [updated] = await Cart.update({
            total
        },{ where:{ id } });
        
        if(updated) {
            const cart = await Cart.findByPk(id, {
                attributes: { exclude: ['userId'] },
                include: {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'username']
                }
            });
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message:'No se actualizo el Carrito' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar Cart', details: error.message });
    }
};

const cartDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByPk(id);

        if(cart) {
            await cart.destroy();
            return res.status(200).json({ message:'Se elimino el Carrito de la base de datos' });
        } else {
            return res.status(404).json({ message:'No se encontro el Carrito' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Cart', details: error.message });
    }
};

module.exports = {
    cartCreate,
    cartAll,
    cartById,
    cartUpdate,
    cartDelete
};