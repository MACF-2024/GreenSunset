const { Product } = require('../models');

const productCreate = async (req, res) => {
    const { name, image, price, description } = req.body
    try {
        const product = await Product.create({
            name, 
            image, 
            price, 
            description
        });

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el producto', details: error.message });
    }
};

const productAll = async (req, res) => {
    try {
        const products = await Product.findAll();
        
        if(products) return res.status(200).json(products)
        else return res.status(404).json({ message: 'Productos no encontrados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los producto', details: error.message });
    }
};

const productById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id);

        if (product) return res.status(200).json(product)
        else return res.status(404).json({ message:'Producto no encontrado' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
    }
};

const productUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, image, price, description, stock, discount } = req.body;
    try {
        const [updated] = await Product.update({
            name, 
            image, 
            price, 
            description, 
            stock, 
            discount
        }, { where: { id } });

        if (updated) {
            const productUpdated = await Product.findByPk(id);
            return res.status(200).json(productUpdated);
        } else {
            return res.status(404).json({ message:'Producto no actualizado' });
        };
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
    }
};

const productDelete = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await Product.update({ validation },{ where:{ id }});

        if (updated) {
            const productDeleted = await Product.findByPk(id);
            if (validation) return res.status(200).json({ message:`Producto ${productDeleted.name} activo` }) 
            else return res.status(200).json({ message:`Producto ${productDeleted.name} dado de baja` })
        } else {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
    }
};

module.exports = {
    productCreate,
    productAll,
    productById,
    productUpdate,
    productDelete
};