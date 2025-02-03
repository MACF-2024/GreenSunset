const { Effect, Product } = require('../models');

const effectCreate = async (req, res) => {
    const { name } = req.body;
    try {
        const effect = await Effect.create({
            name
        });

        if (effect) res.status(201).json(effect)
        else res.status(404).json({ message: 'No se creo el Efecto' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Effect', details: error.message });
    }
};

const effectAll = async (req, res) => {
    try {
        const effects = await Effect.findAll();

        if(effects.length > 0) res.status(200).json(effects)
        else res.status(404).json({ message: 'No se encontraron Efectos' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los Effect', details: error.message });
    }
};

const effectById = async (req, res) => {
    const { id } = req.params;
    try {
        const effect = await Effect.findByPk(id);
        
        if (effect) res.status(200).json(effect)
        else res.status(404).json({ message: 'No se encunetra el Efecto' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el Effect', details: error.message });
    }
};

const effectUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const effectN = await Effect.findByPk(id);
        const [updated] = await Effect.update({
            name
        },{ where: { id } });
        
        if(updated) {
            const effect = await Effect.findByPk(id);
            return res.status(200).json({ message:`Efecto ${effectN.name} actualizado`, updated: effect });
        } else {
            return res.status(404).json('No se actualizo el Efecto');
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el Effect', details: error.message });
    }
};

const effectDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const effect = await Effect.findByPk(id);

        if (effect) {
            const effectName = effect.name;
            await effect.destroy();
            return res.status(200).json({ message:`Efecto ${effectName} fue eliminado de la base de datos` });
        } else {
            return res.status(404).json({ message: 'No se encontro el Efecto' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el Effect', details: error.message });
    }
};

const addEffectToProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const effect = await Effect.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!effect || !product) res.status(404).json({ message: 'No se encontraron lo elementos solicitados' });

        await product.addEffect(effect);

        res.status(200).json({ message: 'Agregado Efecto a Product correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeEffectFromProduct = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const effect = await Effect.findByPk(id);
        const product = await Product.findByPk(productId);

        if(!effect || !product) res.status(404).json({ message: 'No se encontraron lo elementos solicitados' });

        await product.removeEffect(effect);

        res.status(200).json({ message: 'Se elimino Efecto del Producto correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
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