const { Effect, Product } = require('../models');

const effectCreate = async (req, res) => {
    const { name } = req.body;
    try {
        const effect = await Effect.create({
            name
        });

        if (!effect) return res.status(404).json({ error: 'No se creo el Efecto' });

        res.status(201).json({ message: 'Se creo corractemente el efecto', effect });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Effect', details: error.message });
    }
};

const effectAll = async (req, res) => {
    try {
        const effects = await Effect.findAll();

        if (effects.length <= 0) return res.status(404).json({ error: 'No se encontraron Efectos' });

        res.status(200).json({ message: 'Se obtuvo todos los efectos creados', effects });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los Effect', details: error.message });
    }
};

const effectById = async (req, res) => {
    const { id } = req.params;
    try {
        const effect = await Effect.findByPk(id);

        if (!effect) return res.status(404).json({ error: 'No se encuentra el Efecto' });

        res.status(200).json({ message: 'Se obtuvo el efecto', effect });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el Effect', details: error.message });
    }
};

const effectUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const effectN = await Effect.findByPk(id);

        const [updated] = await Effect.update({
            name
        }, { where: { id } });

        if (!updated) return res.status(404).json({ error: `No se actualizo el Efecto ${effectN.name}` });

        const effect = await Effect.findByPk(id);

        res.status(200).json({ message: `El efecto ${effectN.name} actualizado`, updated: effect });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el Effect', details: error.message });
    }
};

const effectDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const effect = await Effect.findByPk(id);
        if (!effect) return res.status(404).json({ error: 'No se encontro el Efecto' });
        
        const effectName = effect.name;
        await effect.destroy();
        
        res.status(200).json({ message: `El efecto ${effectName} fue eliminado de la base de datos` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el Effect', details: error.message });
    }
};

const addEffectToProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const effect = await Effect.findByPk(id);
        const product = await Product.findByPk(productId);

        if (!effect || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await product.addEffect(effect);

        res.status(200).json({ message: `Agregado el efecto ${effect.name} al producto ${product.name} correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeEffectFromProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const effect = await Effect.findByPk(id);
        const product = await Product.findByPk(productId);

        if (!effect || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await product.removeEffect(effect);

        res.status(200).json({ message: `Se elimino el efecto ${effect.name} del producto ${product.name} correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

module.exports = {
    effectCreate,
    effectAll,
    effectById,
    effectUpdate,
    effectDelete,
    addEffectToProduct,
    removeEffectFromProduct
};