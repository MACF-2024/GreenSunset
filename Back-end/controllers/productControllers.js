const { Product, Variety, Taste, Effect, Crop, Comment, Ranking } = require('../models');

const productCreate = async (req, res) => {
    const { cropId } = req.params;
    const { name, image, price, description } = req.body
    try {
        const product = await Product.create({
            name, 
            image, 
            price, 
            description,
            cropId
        });

        if(!product) return res.status(404).json({ error: 'No se creo el producto' });

        res.status(200).json({ message: 'Se creo correctamente el producto', post: product });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto', details: error.message });
    }
};

const productAll = async (req, res) => {
    try {
        const products = await Product.findAll({
            attributes: { exclude:['cropId'] },
            include:[{
                model: Variety,
                as: 'varieties',
                attributes: ['id','name'],
                through: { attributes: [] }
            },{
                model: Taste,
                as: 'taste',
                attributes: ['id','name'],
                through: { attributes: [] }
            },{
                model: Effect,
                as: 'effect',
                attributes: ['id','name'],
                through: { attributes: [] }
            },{
                model: Crop,
                as: 'crop',
                attributes: ['id','name']
            }]
        });
        
        if(products.length <= 0 || !Array.isArray(products)) return res.status(404).json({ error: 'Productos no encontrados' });

        res.status(200).json({ message: 'Todos los productos creados', get: products });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los producto', details: error.message });
    }
};

const productById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id,{
            attributes: { exclude: ['cropId'] },
            include:[{
                model: Variety,
                as: 'varieties',
                attributes: ['id','name'],
                through: { attributes: [] }
            },{
                model: Taste,
                as: 'taste',
                attributes: ['id','name'],
                through: { attributes: [] }
            },{
                model: Effect,
                as: 'effect',
                attributes: ['id','name'],
                through: { attributes: [] }
            },{
                model: Crop,
                as: 'crop',
                attributes: ['id','name']
            }]
        });
        
        if (!product) return res.status(404).json({ error:'Producto no encontrado' });

        res.status(200).json({ message: 'Se obtuvo el producto', get: product });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
    }
};

const getCommentToProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id,{
            attributes: [],
            include:[{
                model: Comment,
                as: 'comment'
            }]
        });
        
        if (!product) return res.status(404).json({ error:'Producto no encontrado' });
        res.status(200).json({ message: 'Se obtuvo el producto', get: product });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
    }
};

const getRankngToProduct = async (req, res) => {
    const { id } = req.params
    try {
        const mapping = {
            'uno': 1,
            'dos': 2,
            'tres': 3,
            'cuatro': 4,
            'cinco': 5
        };

        const product = await Product.findByPk(id,{
            attributes: [],
            include:{
                model: Ranking,
                as: 'ranking'
            }
        });
        if (!product) return res.status(404).json({ error:'Producto no encontrado' });

        const numbers = product.ranking.map(e => mapping[e.ranking.trim().toLowerCase()] || 0);
        const sum = numbers.reduce((a,b) => a + b, 0);
        const prom = sum / numbers.length;

        res.status(200).json({ message: 'Se obtuvo el producto', get: { rankingTotal: prom, product } });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
    }
};

const productUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, image, price, cropId, description, stock, discount } = req.body;
    try {
        const [updated] = await Product.update({
            name, 
            image, 
            price, 
            description, 
            stock, 
            discount,
            cropId
        }, { where: { id } });
        
        if (!updated) return res.status(404).json({ error:'Producto no actualizado' });
        const product = await Product.findByPk(id);
        
        res.status(200).json({ message: 'Se actualizo correctamente', put: product });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
    }
};

const productDelete = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await Product.update({ validation },{ where:{ id }});
        if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });

        const product = await Product.findByPk(id);        
        if (product.validation === false) return res.status(200).json({ message:`Producto ${product.name} dado de baja` });

        res.status(200).json({ message:`Producto ${product.name} activo` })
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
    }
};

module.exports = {
    productCreate,
    productAll,
    productById,
    getCommentToProduct,
    getRankngToProduct,
    productUpdate,
    productDelete
};