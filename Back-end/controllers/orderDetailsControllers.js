const { OrderDetail, User, Order } = require('../models');

const orderDetailCreate = async (req, res) => {
    const { orderId } = req.params;
    const { price, quantity, subtotal } = req.body;
    try {
        const orderDetail = await OrderDetail.create({
            price, 
            quantity, 
            subtotal,
            orderId
        });

        if (orderDetail) res.status(201).json(orderDetail)
        else res.status(404).json({ message: 'No se creo el Detalle de la Orden' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear OrderDetail', details: error.message });
    }
};

const orderDetailAll = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll({
            attributes: { exclude: ['orderId'] },
            include: [{
                model: Order,
                as: 'order',
                attributes: ['id', 'total'],
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['id','username','email']
                }]
            }]
        });
        
        if(orderDetails.length > 0) res.status(200).json(orderDetails)
        else res.status(404).json({ message:'No se encontraron Detalles de Ordenes creadas' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener OrderDetail', details: error.message });
    }
};

const orderDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetail.findByPk(id, {
            attributes: { exclude: ['orderId'] },
            include: [{
                model: Order,
                as: 'order',
                attributes: ['id', 'total'],
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['id','username','email']
                }]
            }]
        });

        if (orderDetail) res.status(200).json(orderDetail)
        else res.status(404).json({ message: 'No se encontro el Detalle de la Orden' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener OrderDetail', details: error.message });
    }
};

const orderDetailUpdate = async (req, res) => {
    const { id } = req.params;
    const { price, subtotal, quantity } = req.body;
    try {
        const [updated] = await OrderDetail.update({
            price, 
            subtotal, 
            quantity
        },{ where:{ id } });
        
        if(updated) {
            const orderDetail = await OrderDetail.findByPk(id, {
                attributes: { exclude: ['orderId'] },
                include: [{
                    model: Order,
                    as: 'order',
                    attributes: ['id', 'total'],
                    include: [{
                        model: User,
                        as: 'user',
                        attributes: ['id','username','email']
                    }]
                }]
            });
            return res.status(200).json(orderDetail);
        } else {
            return res.status(404).json({ message:'No se actualizo el Detalle de la Orden' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar OrderDetail', details: error.message });
    }
};

const orderDetailDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetail.findByPk(id, {
            include: [{
                model: Order,
                as: 'order',
                attributes: ['id'],
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['id','username']
                }]
            }]
        });

        if(orderDetail) {
            const username = orderDetail.order.user.username
            await orderDetail.destroy();
            return res.status(200).json({ message:`Se elimino el Detalle de la Orden de ${username} de la base de datos` });
        } else {
            return res.status(404).json({ message:'No se encontro el Detalle de la Orden' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar OrderDetail', details: error.message });
    }
};

module.exports = {
    orderDetailCreate,
    orderDetailAll,
    orderDetailById,
    orderDetailUpdate,
    orderDetailDelete
};