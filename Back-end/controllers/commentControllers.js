const { Comment, User, Product } = require('../models');

const commentCreate = async (req, res) => {
    const { userId, productId } = req.params;
    const { comment } = req.body;
    try {
        const newComment = await Comment.create({
            comment,
            userId,
            productId
        });

        if (!newComment) res.status(404).json({ error: 'No se creo el Comentario' });

        res.status(201).json({message:'Se creo con exito el comentario', newComment});
    } catch (error) {
        res.status(500).json({ error: 'Error al crear Comment', details: error.message });
    }
};

const commentAll = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            attributes: { exclude: ['userId', 'productId'] },
            include: [{
                model: User,
                as: 'users',
                attributes: ['id','username']
            },{
                model: Product,
                as: 'products',
                attributes: ['id','name']
            }]
        });
        
        if(comments.length <= 0) res.status(404).json({ error:'No se encontraron comentarios creados' });

        res.status(200).json({ message:'Todos los comentarios', comments})
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Comment', details: error.message });
    }
};

const commentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id, {
            attributes: { exclude: ['userId', 'productId'] },
            include: [{
                model: User,
                as: 'users',
                attributes: ['id','username']
            },{
                model: Product,
                as: 'products',
                attributes: ['id','name']
            }]
        });

        if (!comment) res.status(404).json({ error: 'No se encontro el Comentario' });

        res.status(200).json({ message:`Comentario de ${comment.users.username}`, comment})
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Comment', details: error.message });
    }
};

const commentUpdate = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    try {
        const [updated] = await Comment.update({
            comment
        },{ where:{ id } });
        
        if(!updated) res.status(404).json({ error:'No se actualizo el Comentario' });

        const commentId = await Comment.findByPk(id);
        res.status(200).json({ message:'Comentario actualizado', commentId});
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar Comment', details: error.message });
    }
};

const commentDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);

        if(!comment) res.status(404).json({ error:'No se encontro el Comentario' });
        
        await comment.destroy();
        res.status(200).json({ message:'Se elimino el Comentario de la base de datos' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar Comment', details: error.message });
    }
};

module.exports = {
    commentCreate,
    commentAll,
    commentById,
    commentUpdate,
    commentDelete
};