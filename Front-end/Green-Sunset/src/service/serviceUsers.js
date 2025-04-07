import axios from 'axios';

const API_Users = 'http://localhost:4000/api/user';

const getUsers = () => {
    return axios.get(`${API_Users}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const register = userData => {
    return axios.post(`${API_Users}/create`, userData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const login = userData => {
    return axios.post(`${API_Users}/login`, userData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const updateUser = (id, userData) => {
    return axios.put(`${API_Users}/update/${id}`, userData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const getUserDetail = id => {
    return axios.get(`${API_Users}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const addResidence = (id, residenceId) => {
    return axios.put(`${API_Users}/${id}/residence/${residenceId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const getFavorites = id => {
    return axios.get(`${API_Users}/favorite/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const addFavorite = (id, productId) => {
    return axios.get(`${API_Users}/${id}/favorite/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const getComment = id => {
    return axios.get(`${API_Users}/comment/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const getRanking = id => {
    return axios.get(`${API_Users}/comment/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const getOrderUser = id => {
    return axios.get(`${API_Users}/order/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const removeFavorite = (id, productId) => {
    return axios.get(`${API_Users}/${id}/delete/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const updatePassword = (id, userData) => {
    return axios.get(`${API_Users}/update-password/${id}`, userData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};

const deleteUser = (id, userData) => {
    return axios.get(`${API_Users}/delete/${id}`, userData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer todos los usuarios', error)
        throw error;
    });
};



export default {
    getUsers,
    register,
    login,
    updateUser,
    getUserDetail,
    addResidence,
    getFavorites,
    addFavorite,
    getComment,
    getRanking,
    getOrderUser,
    removeFavorite,
    updatePassword,
    deleteUser

};