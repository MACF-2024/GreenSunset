import axios from "axios";

const API_Taste = 'http://localhost:4000/api/taste';

const getTaste = id => {
    return axios.get(`${API_Taste}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer el sabor')
        throw error
    });
};

const getTastes = () => {
    return axios.get(`${API_Taste}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer los sabores')
        throw error
    });
};

const newTaste = tasteData => {
    return axios.post(`${API_Taste}/create`, tasteData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para crear el sabor nuevo')
        throw error
    });
};

const updateTaste = (id, tasteData) => {
    return axios.put(`${API_Taste}/update/${id}`, tasteData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para actualizar el sabor')
        throw error
    });
};

const addTaste = (id, productId) => {
    return axios.post(`${API_Taste}/${id}/product/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para agregar el sabor')
        throw error
    });
};

const removeTaste = (id, productId) => {
    return axios.delete(`${API_Taste}/${id}/delete/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para quitar el sabor')
        throw error
    });
};

const deleteTaste = id => {
    return axios.delete(`${API_Taste}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para eliminar el sabor')
        throw error
    });
};

export default {
    getTaste,
    getTastes,
    newTaste,
    updateTaste,
    deleteTaste,
    addTaste,
    removeTaste
}