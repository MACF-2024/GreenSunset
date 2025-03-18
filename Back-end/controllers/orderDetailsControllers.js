const { OrderDetail, Product, ItemCart, Cart } = require('../models')

const orderDetailCreate = async (req, res) => {
    const { orderId, userId } = req.params;
    try {
        const cart = await Cart.findOne({
            where: { userId },
            include: [{
                model: ItemCart,
                as: 'items'
            }]
        });
        if (!cart || cart.items.length === 0 || !Array.isArray(cart.items)) return res.status(404).json({ error: 'No se encontro el carrito o esta vacio' });

        const orderDetails = [];
        await Promise.all(cart.items.map(async (item) => {
            const create = await OrderDetail.create({
                orderId,
                quantity: item.quantity,
                price: item.price + 1,
                subtotal: item.quantity * item.price
            });

            await create.addProduct(item.productId);
            orderDetails.push(create);
        }));

        res.status(201).json({ message: 'Se creo correctamente el detalle de la orden', post: orderDetails });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear OrderDetail', details: error.message });
    }
};

const orderDetailAll = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll({
            include: {
                model: Product,
                as: 'products',
                attributes: ['id','name','price','discount'],
                through:{ attributes:[] }
            }
        });
        
        if(orderDetails.length <= 0) return res.status(404).json({ error:'No se encontraron Detalles de Ordenes creadas' });

        res.status(200).json({ message: 'Todos los detalles de orden', get: orderDetails });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener OrderDetail', details: error.message });
    }
};

const getOrderDetailsToOrder = async (req, res) => {
    const { orderId } = req.params;
    try {
        const orderDetails = await OrderDetail.findAll({
            where: { orderId },
            include: {
                model: Product,
                as: 'products',
                attributes: ['id','name','price','discount'],
                through:{ attributes:[] }
            }
        });
        
        if(orderDetails.length <= 0 || !Array.isArray(orderDetails)) return res.status(404).json({ error:'No se encontraron Detalles de Ordenes creadas' });

        res.status(200).json({ message: `Todos los detalles de la orden ${orderId}` , get: orderDetails });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener OrderDetail', details: error.message });
    }
};

const orderDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetail.findByPk(id, {
            include: {
                model: Product,
                as: 'products',
                attributes: ['id','name','price','discount'],
                through:{ attributes:[] }
            }
        });

        if (!orderDetail) return res.status(404).json({ error: 'No se encontro el Detalle de la Orden' });

        res.status(200).json({ message: 'Se obtuvo el detalle de la orden', get: orderDetail });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener OrderDetail', details: error.message });
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
        
        if(!updated) return res.status(404).json({ error:'No se actualizo el Detalle de la Orden' });
        const orderDetail = await OrderDetail.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: orderDetail });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar OrderDetail', details: error.message });
    }
};

const orderDetailDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetail.findByPk(id);
        if(!orderDetail) return res.status(404).json({ error:'No se encontro el Detalle de la Orden' });
        
        const username = orderDetail.order.user.username
        await orderDetail.destroy();
        
        res.status(200).json({ message:`Se elimino el Detalle de la Orden de ${username} de la base de datos` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar OrderDetail', details: error.message });
    }
};

const removeProductFromOrderDetail = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const orderDetail = await OrderDetail.findByPk(id);
        const product = await Product.findByPk(productId);
        
        if(!orderDetail || !product) return res.status(404).json({ error:'Error al obtener los datos solicitados' });
        
        await orderDetail.removeProduct(product.id);
        
        res.status(201).json({ message:'Eliminado Producto en Detalle de la Orden' });
    } catch (error) {
        res.status(500).json({ error:'Error al agregar tabla intermedia', detail: error.message });
    }
};

module.exports = {
    orderDetailCreate,
    orderDetailAll,
    getOrderDetailsToOrder,
    orderDetailById,
    orderDetailUpdate,
    orderDetailDelete,
    removeProductFromOrderDetail
};