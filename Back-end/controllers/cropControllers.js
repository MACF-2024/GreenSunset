const { Crop } = require('../models');

const cropCreate = async (req, res) => {
    const { name } = req.body;
    try {
        const crop = await Crop.create({ name });

        if (!crop) res.status(404).json({ error: 'No se pudo crear el tipo de Cultivo' });

        res.status(201).json({ message: 'Se creo correctamente el cultivo', crop });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el Crop', details: error.message });
    }
};

const cropAll = async (req, res) => {
    try {
        const crops = await Crop.findAll();

        if (crops.length <= 0) res.status(404).json({ error: 'No se encontraron cultivos creados' });

        res.status(200).json({ message: 'Todos los cultivos creados', crops })
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los Crop', details: error.message });
    }
};

const cropById = async (req, res) => {
    const { id } = req.params;
    try {
        const crop = await Crop.findByPk(id);

        if (!crop) res.status(404).json({ error: 'No se encontro el Cultivo' });

        res.status(200).json({ message: 'Se encontro el cultivo', crop });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el Crop', details: error.message });
    }
};

const cropUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [updated] = await Crop.update({
            name
        }, { where: { id } });

        if (!updated) res.status(404).json({ error: 'No se ' });

        const crop = await Crop.findByPk(id);
        res.status(200).json({ message: 'Se actualizo el cultivo correctamente', crop });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el Crop', details: error.message });
    }
};

const cropDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const crop = await Crop.findByPk(id);

        if (!crop) res.status(404).json({ error: 'No se encontro el Cultivo' });

        const cropName = crop.name;
        await crop.destroy();

        res.status(200).json({ message: `Cultivo ${cropName} fue eliminado de la base de datos` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el Crop', details: error.message });
    }
};


module.exports = {
    cropCreate,
    cropAll,
    cropById,
    cropUpdate,
    cropDelete
};