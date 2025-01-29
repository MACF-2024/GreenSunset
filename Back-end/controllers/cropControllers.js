const { Crop } = require('../models');

const cropCreate = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) return res.status(404).json({ message: 'Introduzca bien un nombre' });
        
        const crop = await Crop.create({ name });

        if (crop) return res.status(201).json(crop)
        else return res.status(404).json({ message: 'No se pudo crear el tipo de Cultivo' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el Crop', details: error.message });
    }
};

const cropAll = async (req, res) => {
    try {
        const crops = await Crop.findAll();

        if (crops > 0) return res.status(200).json(crops)
        else return res.status(404).json({ message: 'No se encontraron cultivos creados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los Crop', details: error.message });
    }
};

const cropById = async (req, res) => {
    const { id } = req.params;
    try {
        if(!id) return res.status(404).json({ message: 'No se encontro un ID valido' });
        
        const crop = await Crop.findByPk(id);
        
        if (crop) return res.status(200).json(crop)
        else return res.status(404).json({ message: 'No se encontro el Cultivo' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el Crop', details: error.message });
    }
};

const cropUpdate = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        if(!id) return res.status(404).json({ message: 'No se encontro un ID valido' });
        
        const [updated] = await Crop.update({
            name
        },{ where: { id } });

        if (updated) {
            const crop = await Crop.findByPk(id);
            return res.status(200).json(crop);
        } else {
            return res.status(404).json({ message: 'No se ' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el Crop', details: error.message });
    }
};

const cropDelete = async (req, res) => {
    const { id } = req.params;
    try {
        if(!id) return res.status(404).json({ message: 'No se encontro un ID valido' });
        
        const crop = await Crop.findByPk(id);

        if (crop) {
            const cropName = crop.name;
         
            await crop.destroy();
            
            return res.status(200).json({ message: `Cultivo ${cropName} fue eliminado de la base de datos`})
        } else {
            return res.status(404).json({ message: 'No se encontro el Cultivo' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el Crop', details: error.message });
    }
};


module.exports = {
    cropCreate,
    cropAll,
    cropById,
    cropUpdate,
    cropDelete
};