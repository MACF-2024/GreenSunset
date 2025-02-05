const { Cart, User, ItemCart, Product } = require('../models');

const cartCreate = async (req, res) => {
    const { userId } = req.params;
    const { total } = req.body;
    try {
        const cart = await Cart.create({
            total,
            userId
        });

        if (!cart) res.status(404).json({ error: 'No se creo el Carrito' });

        res.status(201).json({ message: 'Se creo con exito', cart });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Cart', details: error.message });
    }
};

const cartAll = async (req, res) => {
    try {
        const carts = await Cart.findAll({
            attributes: { exclude: ['userId'] },
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'username']
            }, {
                model: ItemCart,
                as: 'items',
                attributes: ['id', 'quantity'],
                include: {
                    model: Product,
                    as: 'products',
                    attributes: ['name', 'price', 'discount'],
                    through: { attributes: [] }
                }
            }]
        });

        if (carts.length <= 0) res.status(404).json({ message: 'No se encontraron carritos creados' });

        res.status(200).json({ message: 'Todos lo carritos', carts });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Cart', details: error.message });
    }
};

const cartById = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByPk(id, {
            attributes: { exclude: ['userId'] },
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'username', 'email']
            }, {
                model: ItemCart,
                as: 'items',
                attributes: ['id', 'quantity'],
                include: {
                    model: Product,
                    as: 'products',
                    attributes: ['name', 'price', 'discount'],
                    through: { attributes: [] }
                }
            }]
        });

        if (!cart) res.status(404).json({ message: 'No se encontro el Carrito' });

        res.status(200).json({ message: `Se obtuvo el carrito de ${cart.user.username}`, cart });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Cart', details: error.message });
    }
};

const cartUpdate = async (req, res) => {
    const { id } = req.params;
    const { total } = req.body;
    try {
        const [updated] = await Cart.update({
            total
        }, { where: { id } });

        if (!updated) res.status(404).json({ message: 'No se actualizo el Carrito' });

        const cart = await Cart.findByPk(id);
        res.status(200).json({ message: 'Se actualizo con exito', cart });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar Cart', details: error.message });
    }
};

const cartDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByPk(id);

        if (!cart) res.status(404).json({ message: 'No se encontro el Carrito' });
        
        await cart.destroy();
        res.status(200).json({ message: 'Se elimino el Carrito de la base de datos' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Cart', details: error.message });
    }
};

module.exports = {
    cartCreate,
    cartAll,
    cartById,
    cartUpdate,
    cartDelete
};