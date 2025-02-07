const { Variety, Product } = require('../models');

const varietyCreate = async (req, res) => {
    const { name } = req.body;
    try {
        const variety = await Variety.create({
            name
        });

        if(!variety) return res.status(404).json({ error: 'No se pudo crear la Variedad' });

        res.status(201).json({ message: 'Se creo correctamente', post: variety });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Variety', details: error.message });
    }
};

const varietyAll = async (req, res) => {
    try {
        const varieties = await Variety.findAll();

        if (varieties.length <= 0) return res.status(404).json({ error: 'No se encontraron Variedades creadas' });

        res.status(200).json({ message: 'Todas las variedades creadas', get: varieties });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las Variety', details: error.message });
    }
};

const varietyById = async (req, res) => {
    const { id } = req.params;
    try {
        const variety = await Variety.findByPk(id);

        if (!variety) return res.status(404).json({ error: 'No se encontro la variedad' });

        res.status(200).json({ message: 'Se obtuvo la variedad', get: variety });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Variety', details: error.message });
    }
};

const varietyUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [updated] = await Variety.update({
            name
        },{ where: { id } });

        if (!updated) return res.status(404).json({ error: 'No se actualizo la Variedad' });
        const variety = await Variety.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: variety });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar Variety', details: error.message });
    }
};

const varietyDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const variety = await Variety.findByPk(id);
        if (!variety) return res.status(404).json({ error: 'No se encontro la Variedad' });
        
        const varietyName = variety.name;
        await variety.destroy();
        
        res.status(200).json({ message: `Variedad ${varietyName} fue eliminada de la base de datos` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Variety', details: error.message });
    }
};

const addVarietyToProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const variety = await Variety.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!variety || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await product.addVariety(variety.id);

        res.status(200).json({ message: `Se agrego la Variedad ${variety.name} al Producto ${product.name} correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeVarietyFromProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const variety = await Variety.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!variety || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await product.removeVariety(variety);

        res.status(200).json({ message: 'Se elimino Variedad del Producto correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

module.exports = {
    varietyCreate,
    varietyAll,
    varietyById,
    varietyUpdate,
    varietyDelete,
    addVarietyToProduct,
    removeVarietyFromProduct
};