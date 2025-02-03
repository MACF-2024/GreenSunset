const { ItemCart, Cart, Product } = require('../models');

const itemCartCreate = async (req, res) => {
    const { cartId } = req.params;
    const { quantity } = req.body;
    try {
        const itemCart = await ItemCart.create({
            cartId,
            quantity
        });

        if (itemCart) res.status(201).json(itemCart)
        else res.status(404).json({ message: 'No se creo el Item del Carrito' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear ItemCart', details: error.message });
    }
};

const itemCartAll = async (req, res) => {
    try {
        const itemCarts = await ItemCart.findAll({
            attributes: { exclude: ['cartId'] },
            include: [{
                model: Cart,
                as: 'cart',
                attributes: ['id']
            },{
                model: Product,
                as: 'products',
                attributes: ['id','name'],
                through: { attributes: [] }
            }]
        });
        
        if(itemCarts.length > 0) res.status(200).json(itemCarts)
        else res.status(404).json({ message:'No se encontraron items del carrito creados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener ItemCart', details: error.message });
    }
};

const itemCartById = async (req, res) => {
    const { id } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id, {
            attributes: { exclude: ['cartId'] },
            include: [{
                model: Cart,
                as: 'cart',
                attributes: ['id']
            },{
                model: Product,
                as: 'products',
                attributes: ['id','name'],
                through: { attributes: [] }
            }]
        });

        if (itemCart) res.status(200).json(itemCart)
        else res.status(404).json({ message: 'No se encontro el Item del Carrito' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener ItemCart', details: error.message });
    }
};

const itemCartUpdate = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const [updated] = await ItemCart.update({
            quantity
        },{ where:{ id } });
        
        if(updated) {
            const itemCart = await ItemCart.findByPk(id, {
                attributes: { exclude: ['cartId'] },
                include: [{
                    model: Cart,
                    as: 'cart',
                    attributes: ['id']
                },{
                    model: Product,
                    as: 'products',
                    attributes: ['id','name'],
                    through: { attributes: [] }
                }]
            });
            return res.status(200).json(itemCart);
        } else {
            return res.status(404).json({ message:'No se actualizo el Item del Carrito' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar ItemCart', details: error.message });
    }
};

const itemCartDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id);

        if(itemCart) {
            const itemCartN = itemCart.products.name
            await itemCart.destroy();
            return res.status(200).json({ message:`Se elimino el Producto ${itemCartN} de Item del Carrito de la base de datos` });
        } else {
            return res.status(404).json({ message:'No se encontro el Item del Carrito' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar ItemCart', details: error.message });
    }
};

const addItemCartToProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!itemCart || !product) res.status(404).json({ message: 'No se encontraron lo elementos solicitados' });

        await itemCart.addProduct(product);

        res.status(200).json({ message: 'Agregado Producto al Item del Carrito correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeItemCartFromProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const itemCart = await ItemCart.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!itemCart || !product) res.status(404).json({ message: 'No se encontraron lo elementos solicitados' });

        await itemCart.removeProduct(product);

        res.status(200).json({ message: 'Se elimino Producto del Item del Carrito correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
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