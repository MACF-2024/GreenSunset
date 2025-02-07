const { Taste, Product } = require('../models');

const tasteCreate = async (req, res) => {
    const { name } = req.body
    try {
        const taste = await Taste.create({
            name
        });

        if(!taste) return res.status(404).json({ error: 'No se creo el sabor' });
        
        res.status(201).json({ message: 'Se creo correctamente', post: taste });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Taste', details: error.message });
    }
};

const tasteAll = async (req, res) => {
    try {
        const tastes = await Taste.findAll();
        if(tastes.length <= 0) return res.status(404).json({ error: 'No hay Sabores creados' });

        res.status(200).json({ message: 'Todos los sabores creados', get: tastes });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los Taste', details: error.message });
    }
};

const tasteById = async (req, res) => {
    const { id } = req.params;
    try {
        const taste = await Taste.findByPk(id);
        if(!taste) return res.status(404).json({ error: 'No se encontro el Sabor' });

        res.status(200).json({ message: 'Se obtuvo el sabor', get: taste });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el Taste', details: error.message });
    }
};

const tasteUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [updated] = await Taste.update({
            name
        },{ where:{ id } });

        if (!updated) return res.status(404).json({ error: 'No se pudo actualizar el Sabor' });
        const updatedTaste = await Taste.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: updatedTaste });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar Taste', details: error.message });
    }
};

const tasteDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const taste = await Taste.findByPk(id);
        if (!taste) return res.status(404).json({ error: 'No se encontro el Sabor' });

        const tasteName = taste.name;
        await taste.destroy();

        res.status(200).json({ message: `El sabor ${tasteName} fue eliminado` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Taste', details: error.message });
    }
};

const addTasteToProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const taste = await Taste.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!taste || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await product.addTaste(taste);

        res.status(200).json({ message: 'Agregado Sabor a Product correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeTasteFromProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const taste = await Taste.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!taste || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await product.removeTaste(taste);

        res.status(200).json({ message: 'Se elimino Sabor del Producto correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

module.exports = {
    tasteCreate,
    tasteAll,
    tasteById,
    tasteUpdate,
    tasteDelete,
    addTasteToProduct,
    removeTasteFromProduct
}