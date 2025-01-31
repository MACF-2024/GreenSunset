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

        if (residence) res.status(201).json(residence)
        else res.status(404).json({ message: 'No se creo la Residencia' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Residence', details: error.message });
    }
};

const residenceAll = async (req, res) => {
    try {
        const residences = await Residence.findAll();

        if(residences.length > 0) res.status(200).json(residences)
        else res.status(404).json({ message:'No se encontraron residencias creadas' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener las Residences', details: error.message });
    }
};

const residenceById = async (req, res) => {
    const { id } = req.params;
    try {
        const residence = await Residence.findByPk(id);

        if (residence) res.status(200).json(residence)
        else res.status(404).json({ message: 'No se encontro la Residencia' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener la Residence', details: error.message });
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
        
        if(updated) {
            const residence = await Residence.findByPk(id);
            return res.status(200).json(residence);
        } else {
            return res.status(404).json({ message:'No se actualizo la Residencia' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la Residence', details: error.message });
    }
};

const residenceDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const residence = await Residence.findByPk(id);

        if(residence) {
            await residence.destroy();
            return res.status(200).json({ message:'Se elimino la Residencia de la base de datos' });
        } else {
            return res.status(404).json({ message:'No se encontro la Residencia' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Residence', details: error.message });
    }
};

module.exports = {
    residenceCreate,
    residenceAll,
    residenceById,
    residenceUpdate,
    residenceDelete
};