const { Order, Cart, User, OrderDetail, Product } = require('../models');

const orderCreate = async (req, res) => {
    const { userId } = req.params;
    // const { total } = req.body;
    try {
        const cart = await Cart.findOne({
            where: { userId }
        });
        if(!cart) res.status(404).json({ error: 'No se encontro el carrito' })
        
        const order = await Order.create({
            total: cart.total,
            userId
        });
        if (!order) res.status(404).json({ error: 'No se creo la Orden' });
        
        res.status(201).json({ message: 'Se creo correctamente la orden de compra', post: order });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Order', details: error.message });
    }
};

const orderAll = async (req, res) => {
    try {
        const orders = await Order.findAll({
            attributes: { exclude: ['userId'] },
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'username']
            },{
                model: OrderDetail,
                as: 'orderDetail',
                attributes: ['id','price','subtotal','quantity'],
                include: {
                    model: Product,
                    as: 'products',
                    attributes: ['id','price','name'],
                    through: { attributes: [] }
                }
            }]
        });
        
        if(orders.length <= 0) res.status(404).json({ error:'No se encontraron Ordenes creadas' });

        res.status(200).json({ message: 'Todas las ordenes creadas', get: orders });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Order', details: error.message });
    }
};

const orderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id, {
            attributes: { exclude: ['userId'] },
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'username']
            },{
                model: OrderDetail,
                as: 'orderDetail',
                attributes: ['id','price','subtotal','quantity'],
                include: {
                    model: Product,
                    as: 'products',
                    attributes: ['id','price','name'],
                    through: { attributes: [] }
                }
            }]
        });

        if (!order) res.status(404).json({ error: 'No se encontro la Orden' });

        res.status(200).json({ message: 'Se obtuvo la orden de compra', get: order });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Order', details: error.message });
    }
};

const orderUpdate = async (req, res) => {
    const { id } = req.params;
    const { total, status } = req.body;
    try {
        const [updated] = await Order.update({
            total,
            status
        },{ where:{ id } });
        
        if(!updated) res.status(404).json({ error:'No se actualizo la Orden' });

        const order = await Order.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: order });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar Order', details: error.message });
    }
};

const orderDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);

        if(!order) res.status(404).json({ error:'No se encontro la Orden' });
        
        const orderUserN = order.user.username
        
        await order.destroy();
        
        res.status(200).json({ message:`Se elimino la Orden de ${orderUserN} de la base de datos` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Order', details: error.message });
    }
};

module.exports = {
    orderCreate,
    orderAll,
    orderById,
    orderUpdate,
    orderDelete
};