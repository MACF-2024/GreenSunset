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

        if (newComment) res.status(201).json(newComment)
        else res.status(404).json({ message: 'No se creo el Comentario' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear Comment', details: error.message });
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
        
        if(comments.length > 0) res.status(200).json(comments)
        else res.status(404).json({ message:'No se encontraron comentarios creados' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Comment', details: error.message });
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

        if (comment) res.status(200).json(comment)
        else res.status(404).json({ message: 'No se encontro el Comentario' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Comment', details: error.message });
    }
};

const commentUpdate = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    try {
        const [updated] = await Comment.update({
            comment
        },{ where:{ id } });
        
        if(updated) {
            const comment = await Comment.findByPk(id, {
                attributes: { exclude: ['userId','productId'] },
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
            return res.status(200).json(comment);
        } else {
            return res.status(404).json({ message:'No se actualizo el Comentario' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar Comment', details: error.message });
    }
};

const commentDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);

        if(comment) {
            await comment.destroy();
            return res.status(200).json({ message:'Se elimino el Comentario de la base de datos' });
        } else {
            return res.status(404).json({ message:'No se encontro el Comentario' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Comment', details: error.message });
    }
};

module.exports = {
    commentCreate,
    commentAll,
    commentById,
    commentUpdate,
    commentDelete
};