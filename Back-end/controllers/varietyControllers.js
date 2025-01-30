const { Variety } = require('../models');

const varietyCreate = async (req, res) => {
    const { name } = req.body;
    try {
        const variety = await Variety.create({
            name
        });

        if(variety) res.status(201).json(variety);
        else res.status(404).json({ message: 'No se pudo crear la Variedad' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Variety', details: error.message });
    }
};

const varietyAll = async (req, res) => {
    try {
        const varieties = await Variety.findAll();

        if (varieties.length > 0) res.status(200).json(varieties)
        else res.status(404).json({ message: 'No se encontraron Variedades creadas' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener las Variety', details: error.message });
    }
};

const varietyById = async (req, res) => {
    const { id } = req.params;
    try {
        const variety = await Variety.findByPk(id);

        if (variety) res.status(200).json(variety)
        else res.status(404).json({ message: 'No se encontro la variedad' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Variety', details: error.message });
    }
};

const varietyUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [updated] = await Variety.update({
            name
        },{ where: { id } });

        if (updated) {
            const variety = await Variety.findByPk(id);
            return res.status(200).json(variety)
        } else {
            return res.status(404).json({ message: 'No se actualizo la Variedad' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar Variety', details: error.message });
    }
};

const varietyDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const variety = await Variety.findByPk(id);

        if (variety) {
            const varietyName = variety.name;
            await variety.destroy();
            return res.status(200).json({ message: `Variedad ${varietyName} fue eliminada de la base de datos` });
        } else {
            return res.status(404).json({ message: 'No se encontro la Variedad' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Variety', details: error.message });
    }
};

module.exports = {
    varietyCreate,
    varietyAll,
    varietyById,
    varietyUpdate,
    varietyDelete
};