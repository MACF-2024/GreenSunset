const { Order, User, OrderDetail, Product } = require('../models');

const orderCreate = async (req, res) => {
    const { userId } = req.params;
    const { total } = req.body;
    try {
        const order = await Order.create({
            total,
            userId
        });

        if (order) res.status(201).json(order)
        else res.status(404).json({ message: 'No se creo la Orden' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Order', details: error.message });
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
        
        if(orders.length > 0) res.status(200).json(orders)
        else res.status(404).json({ message:'No se encontraron Ordenes creadas' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Order', details: error.message });
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

        if (order) res.status(200).json(order)
        else res.status(404).json({ message: 'No se encontro la Orden' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Order', details: error.message });
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
        
        if(updated) {
            const order = await Order.findByPk(id);
            return res.status(200).json(order);
        } else {
            return res.status(404).json({ message:'No se actualizo la Orden' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar Order', details: error.message });
    }
};

const orderDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);

        if(order) {
            const orderUserN = order.user.username
            await order.destroy();
            return res.status(200).json({ message:`Se elimino la Orden de ${orderUserN} de la base de datos` });
        } else {
            return res.status(404).json({ message:'No se encontro la Orden' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Order', details: error.message });
    }
};

module.exports = {
    orderCreate,
    orderAll,
    orderById,
    orderUpdate,
    orderDelete
};