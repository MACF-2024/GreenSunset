const { ItemCart, Product } = require('../models');

const itemCartCreate = async (req, res) => {
    const { cartId } = req.params;
    const { quantity } = req.body;
    try {
        const itemCart = await ItemCart.create({
            cartId,
            quantity
        });

        if (!itemCart) return res.status(404).json({ error: 'No se creo el Item del Carrito' });

        res.status(201).json({ message: 'Se creo el item del carrito correctamente', create: itemCart });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear ItemCart', details: error.message });
    }
};

const itemCartAll = async (req, res) => {
    const { cartId } = req.params;
    try {
        const itemCarts = await ItemCart.findAll({
            where: { cartId }
        });
        
        if(itemCarts.length <= 0 || !Array.isArray(itemCarts)) return res.status(404).json({ error:'No se encontraron items en este carrito' });

        res.status(200).json({ message: 'Se obtuvo todos los items del carrito creados', get: itemCarts });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener ItemCart', details: error.message });
    }
};

const itemCartById = async (req, res) => {
    const { id } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id, {
            include: {
                model: Product,
                as: 'products',
                attributes: ['id','name', 'price'],
                through: { attributes: [] }
            }
        });

        if (!itemCart) return res.status(404).json({ error: 'No se encontro el Item del Carrito' });

        res.status(200).json({ message: 'Se obtuvo el Item del carrito', get: itemCart });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener ItemCart', details: error.message });
    }
};

const itemCartUpdate = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const [updated] = await ItemCart.update({
            quantity
        },{ where:{ id } });
        
        if(!updated) return res.status(404).json({ error:'No se actualizo el Item del Carrito' });
        
        const itemCart = await ItemCart.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', get: itemCart });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar ItemCart', details: error.message });
    }
};

const itemCartDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id, {
            include: {
                model: Product,
                as: 'products',
                attributes: ['name'],
                through: { attributes: [] }
            }
        });
        if(!itemCart) return res.status(404).json({ error:'No se encontro el Item del Carrito' });
        
        const productName = itemCart.products.map(product => product.name);
        await itemCart.destroy();

        res.status(200).json({ message:`Se elimino el Producto ${productName} de Item del Carrito de la base de datos`, detail: itemCart });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar ItemCart', details: error.message });
    }
};

const addItemCartToProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!itemCart || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await itemCart.addProduct(product.id);

        res.status(200).json({ message: `Agregado el producto ${product.name} al Item del Carrito correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeItemCartFromProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!itemCart || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await itemCart.removeProduct(product.id);

        res.status(200).json({ message: `Se elimino el producto ${product.name} del Item del Carrito correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

module.exports = {
    itemCartCreate,
    itemCartAll,
    itemCartById,
    itemCartUpdate,
    itemCartDelete,
    addItemCartToProduct,
    removeItemCartFromProduct
};