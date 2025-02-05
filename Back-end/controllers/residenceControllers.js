const { Residence } = require('../models');

const residenceCreate = async (req, res) => {
    const { street, zipCode, types, number, location, province } = req.body;
    try {
        const residence = await Residence.create({
            street, 
            zipCode, 
            types, 
            number, 
            location, 
            province
        });

        if (!residence) res.status(404).json({ error: 'No se creo la Residencia' });

        res.status(201).json({ message: 'Se creo correctamente la residencia', post: residence });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Residence', details: error.message });
    }
};

const residenceAll = async (req, res) => {
    try {
        const residences = await Residence.findAll();

        if(residences.length <= 0) res.status(404).json({ error:'No se encontraron residencias creadas' });

        res.status(200).json({ message: 'Todas las residencias creadas', get:residences });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las Residences', details: error.message });
    }
};

const residenceById = async (req, res) => {
    const { id } = req.params;
    try {
        const residence = await Residence.findByPk(id);

        if (!residence) res.status(404).json({ error: 'No se encontro la Residencia' });

        res.status(200).json({ message: 'Se obtuvo la residencia', get: residence });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la Residence', details: error.message });
    }
};

const residenceUpdate = async (req, res) => {
    const { id } = req.params;
    const { street, zipCode, types, number, location, province } = req.body;
    try {
        const [updated] = await Residence.update({
            street, 
            zipCode, 
            types, 
            number, 
            location, 
            province
        },{ where:{ id } });
        
        if(!updated) res.status(404).json({ error:'No se actualizo la Residencia' });
        
        const residence = await Residence.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: residence });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la Residence', details: error.message });
    }
};

const residenceDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const residence = await Residence.findByPk(id);

        if(!residence) res.status(404).json({ error:'No se encontro la Residencia' });
        
        await residence.destroy();
        
        res.status(200).json({ message:'Se elimino la Residencia de la base de datos' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Residence', details: error.message });
    }
};

module.exports = {
    residenceCreate,
    residenceAll,
    residenceById,
    residenceUpdate,
    residenceDelete
};