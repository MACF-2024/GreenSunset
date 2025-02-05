const { Ranking, User, Product } = require('../models');

const rankingCreate = async (req, res) => {
    const { userId } = req.params;
    const { ranking, productId } = req.body;
    try {
        const newRanking = await Ranking.create({
            ranking,
            userId,
            productId
        });

        if (!newRanking) res.status(404).json({ error: 'No se creo el Ranking' });

        res.status(201).json({ message: 'Se creo correctamente el ranking', post: newRanking });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Ranking', details: error.message });
    }
};

const rankingAll = async (req, res) => {
    try {
        const rankings = await Ranking.findAll({
            attributes: { exclude: ['userId', 'productId'] },
            include: [{
                model: User,
                as: 'users',
                attributes: ['id', 'username', 'email']
            },{
                model: Product,
                as: 'products',
                attributes: ['id', 'name']
            }]
        });

        if (rankings.length <= 0) res.status(404).json({ error: 'No se encontraron Rankings creados' });
        
        res.status(200).json({ message: 'Todos los rankings creados', get: rankings });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Ranking', details: error.message });
    }
};

const rankingById = async (req, res) => {
    const { id } = req.params;
    try {
        const ranking = await Ranking.findByPk(id, {
            attributes: { exclude: ['userId', 'productId'] },
            include: [{
                model: User,
                as: 'users',
                attributes: ['id', 'username', 'email']

            },{
                model: Product,
                as: 'products',
                attributes: ['id', 'name']
            }]
        });

        if (!ranking) res.status(404).json({ error: 'No se encontro el Ranking' });

        res.status(200).json({ message: 'Se obtuvo el ranking', get: ranking });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Ranking', details: error.message });
    }
};

const rankingUpdate = async (req, res) => {
    const { id } = req.params;
    const { ranking } = req.body;
    try {
        const [updated] = await Ranking.update({
            ranking
        }, { where: { id } });

        if (!updated) res.status(404).json({ error: 'No se actualizo el Ranking' });
        
        const ranking = await Ranking.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: ranking });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar Ranking', details: error.message });
    }
};

const rankingDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const ranking = await Ranking.findByPk(id, {
            attributes: {exclude: ['userId', 'productId']},
            include: [{
                model: User,
                as: 'users',
                attributes: ['id', 'username']
            },{
                model: Product,
                as: 'products',
                attributes: ['id', 'name']
            }]
        });

        if (!ranking) res.status(404).json({ error: 'No se encontro el Ranking' });
        
        const username = ranking.users.username
        const product = ranking.products.name
        
        await ranking.destroy();
        
        res.status(200).json({ message: `Se elimino el Ranking de ${product} del usuario ${username} de la base de datos` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Ranking', details: error.message });
    }
};

module.exports = {
    rankingCreate,
    rankingAll,
    rankingById,
    rankingUpdate,
    rankingDelete
};