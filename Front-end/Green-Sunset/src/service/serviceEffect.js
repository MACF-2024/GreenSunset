import axios from "axios";

const API_Effect = 'http://localhost:4000/api/effect';

const getEffects = () => {
    return axios.get(`${API_Effect}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los efectos')
        throw error
    });
};

const getEffect = id => {
    return axios.get(`${API_Effect}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el efecto')
        throw error
    });
};

const newEffect = effectData => {
    return axios.post(`${API_Effect}/create`, effectData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear el nuevo efecto')
        throw error
    });
};

const updateEffect = (id, effectData) => {
    return axios.put(`${API_Effect}/update/${id}`, effectData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar el efecto')
        throw error
    });
};

const deleteEffect = id => {
    return axios.delete(`${API_Effect}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al eliminar el efecto')
        throw error
    });
};

const addEffect = (id, productId) => {
    return axios.post(`${API_Effect}/${id}/product/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al agregar el efecto')
        throw error
    });
};

const removeEffect = (id, productId) => {
    return axios.delete(`${API_Effect}/${id}/delete/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al remover el efecto')
        throw error
    });
};

export default {
    getEffects,
    getEffect,
    newEffect,
    updateEffect,
    deleteEffect,
    addEffect,
    removeEffect
}