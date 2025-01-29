const { Taste } = require('../models');

const tasteCreate = async (req, res) => {
    const { name } = req.body
    try {
        const taste = await Taste.create({
            name
        });

        return res.status(201).json(taste);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Taste', details: error.message });
    }
};

const tasteAll = async (req, res) => {
    try {
        const tastes = await Taste.findAll();

        if(tastes > 0) res.status(200).json(tastes)
        else res.status(404).json({ message: 'No hay Sabores creados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los Taste', details: error.message });
    }
};

const tasteById = async (req, res) => {
    const { id } = req.params;
    try {
        const taste = await Taste.findByPk(id);

        if(taste) res.status(200).json(taste)
        else res.status(404).json({ message: 'No se encontro el Sabor' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el Taste', details: error.message });
    }
};

const tasteUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [updated] = await Taste.update({
            name
        },{ where:{ id } });

        if (updated) {
            const updatedTaste = await Taste.findByPk(id);
            return res.status(200).json(updatedTaste);
        } else {
            return res.status(404).json({ message: 'No se pudo actualizar el Sabor' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar Taste', details: error.message });
    }
};

const tasteDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const taste = await Taste.findByPk(id);
        if (!taste) res.status(404).json({ message: 'No se encontro el Sabor' });

        const tasteName = taste.name;
        await taste.destroy();

        return res.status(200).json({ message: `El sabor ${tasteName} fue eliminado` });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Taste', details: error.message });
    }
};

module.exports = {
    tasteCreate,
    tasteAll,
    tasteById,
    tasteUpdate,
    tasteDelete
}