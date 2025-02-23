const { User, Order, Product, Residence, Membership, Comment, Ranking } = require('../models');
const bcrypt = require('bcrypt');

const userCreate = async (req, res) => {
    const { name, password, email, lastName, username, age } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            password: hashedPassword,
            email,
            lastName,
            username,
            age
        });

        if (!user) return res.status(404).json({ error: 'No se pudo crear el usuario' });
        res.status(201).json({ message: 'Se creo correctamente', post: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario', details: error.message });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        if (user.validation === false) return res.status(200).json({ message: `${user.name} por decision administrativa has sido baneado` });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

        res.status(200).json({ message: `Bienvenido ${user.name}` });
    } catch (error) {
        res.status(500).json({ error: 'Error al loguearse', details: error.message });
    }
}

const userUpdatePassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        const hashedPassword = await bcrypt.hash(password, 10);

        await user.update({ password: hashedPassword });

        res.status(200).json({ message: 'Contraseña actualizada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la contraseña', details: error.message });
    }
}

const userAll = async (req, res) => {
    try {
        const users = await User.findAll({
            include: {
                model: Membership,
                as: 'membership',
                attributes: ['id', 'name', 'price']
            }
        });

        if (users.length <= 0) return res.status(404).json({ error: 'No se encontraron usuario creados' });

        res.status(200).json({ message: 'Todos los usaurios creados', get: users });
    } catch (error) {
        res.status(500).json({ error: 'Error al traer a los usuarios', details: error.message });
    }
};

const userById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['residenceId'] },
            include: [{
                model: Residence,
                as: 'residence',
                attributes: ['id', 'street', 'number', 'location', 'province']
            }, {
                model: Membership,
                as: 'membership',
                attributes: ['id', 'name', 'price']
            }]
        });

        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        res.status(200).json({ message: 'Se obtuvo el usuario', get: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario', details: error.message });
    }
};

const userGetFavorite = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
            attributes: [],
            include: {
                model: Product,
                as: 'favorites',
                attributes: ['id', 'name'],
                through: { attributes: [] }
            }
        });

        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        res.status(200).json({ message: 'Se obtuvo los favoritos', get: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario', details: error.message });
    }
};

const userGetOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
            attributes: [],
            include: {
                model: Order,
                as: 'order'
            }
        });

        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        res.status(200).json({ message: 'Se obtuvo los favoritos', get: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario', details: error.message });
    }
};

const userGetCommentAndRanking = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
            attributes: [],
            include: [{
                model: Comment,
                as: 'comment'
            }, {
                model: Ranking,
                as: 'ranking'
            }]
        });

        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        res.status(200).json({ message: 'Se obtuvo los comentarios y rankings', get: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario', details: error.message });
    }
};

const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, email, lastName, username, age, image } = req.body;
    try {
        const [updated] = await User.update({
            name,
            email,
            lastName,
            username,
            age,
            image
        }, { where: { id } });

        if (!updated) return res.status(404).json({ error: 'Usuario no encontrado' });

        const user = await User.findByPk(id);

        res.status(200).json({ message: 'Se actualizo correctamente', put: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario', details: error.message });
    }
};

const userDeleted = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await User.update({ validation }, { where: { id } });
        if (!updated) return res.status(404).json({ error: 'Usuario no encontrado' });

        const user = await User.findByPk(id);
        if (user.validation) return res.status(200).json({ message: `Usuario ${user.name} activo` });

        res.status(200).json({ message: `Usuario ${user.name} baneado` });
    } catch (error) {
        res.status(500).json({ error: "Error al 'eliminar' el usuario", details: error.message });
    }
};

const addResidenceToUser = async (req, res) => {
    const { id, residenceId } = req.params;
    try {
        const [updated] = await User.update({
            residenceId
        }, { where: { id } });

        if (!updated) return res.status(404).json({ error: 'Usuario no encontrado' });

        const user = await User.findByPk(id, {
            attributes: [],
            include: [{
                model: Residence,
                as: 'residence'
            }]
        });

        res.status(200).json({ message: `Se agrego la residencia al usuario ${user.name}`, post: user });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar User', details: error.message });
    }
};

const addProductToUser = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(productId);

        if (!user || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await user.addFavorite(product.id); // El nombre del metodo depende del as de la relacion, en el caso de user el as es favorites

        res.status(200).json({ message: `Se agrego correctamente a la lista de favoritos de ${user.name} el producto ${product.name}` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

const removeProductFromUser = async (req, res) => {
    const { id, productId } = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(productId);

        if (!user || !product) return res.status(404).json({ error: 'No se encontraron lo elementos solicitados' });

        await user.removeFavorite(product.id);

        res.status(200).json({ message: `Se elimino de favoritos el producto ${product.name} de la lista de ${user.name}` });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar tabla intermedia', details: error.message });
    }
};

module.exports = {
    userCreate,
    userLogin,
    userUpdatePassword,
    userAll,
    userById,
    userUpdate,
    userDeleted,
    addResidenceToUser,
    addProductToUser,
    removeProductFromUser,
    userGetFavorite,
    userGetCommentAndRanking,
    userGetOrder
}