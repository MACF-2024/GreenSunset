const { User } = require('../models');
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

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error:'Error al crear el usuario', details: error.message });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message:'Usuario no encontrado' });
        if (user.validation) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)  return res.status(401).json({ message:'Contraseña incorrecta' });
    
            return res.status(200).json({ message:`Bienvenido ${user.name}`});
        } else {
            return res.status(200).json({ message: `${user.name} por decision administrativa has sido baneado` });
        }
    } catch (error) {
        return res.status(500).json({ error:'Error al loguearse', details: error.message });
    }
}

const userUpdatePassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ massage: 'Usuario no encontrado' });

        const hashedPassword = await bcrypt.hash(password, 10);

        await user.update({ password: hashedPassword });

        return res.status(200).json({ message: 'Contraseña actualizada' });
    } catch (error) {
        return res.status(500).json({ error:'Error al actualizar la contraseña', details: error.message });
    }
}

const userAll = async (req, res) => {
    try {
        const users = await User.findAll();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error:'Error al traer a los usuarios', details: error.message });
    }
};

const userById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);

        if (user) return res.status(200).json(user);
        else return res.status(404).json({ error: 'Usuario no encontrado' });
    } catch (error) {
        return res.status(500).json({ error:'Error al obtener el usuario', details: error.message });
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

        if (updated) {
            const updateUser = await User.findByPk(id);
            return res.status(200).json(updateUser);
        } else {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        };
    } catch (error) {
        return res.status(500).json({ error:'Error al actualizar el usuario', details: error.message });
    }
};

const userDeleted = async (req, res) => {
    const { id } = req.params;
    const { validation } = req.body;
    try {
        const [updated] = await User.update({ validation }, { where: { id } });

        if (updated) {
            const userBand = await User.findByPk(id);
            if (validation) return res.status(200).json({ message:`Usuario ${userBand.name} activo` }) 
            else return res.status(200).json({ message:`Usuario ${userBand.name} baneado` })
        } else {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error:"Error al 'eliminar' el usuario", details: error.message });
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
}