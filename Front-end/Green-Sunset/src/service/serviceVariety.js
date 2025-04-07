import axios from "axios";

const API_Variety = 'http://localhost:4000/api/variety';

const getVarieties = () => {
    return axios.get(`${API_Variety}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

const getVariety = id => {
    return axios.get(`${API_Variety}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

const newVariety = varietyData => {
    return axios.post(`${API_Variety}/create`, varietyData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

const updateVariety = (id, varietyData) => {
    return axios.put(`${API_Variety}/update/${id}`, varietyData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

const addVariety = (id, productId) => {
    return axios.post(`${API_Variety}/${id}/product/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

const removeVariety = (id, productId) => {
    return axios.delete(`${API_Variety}/${id}/delete/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

const deleteVariety = id => {
    return axios.delete(`${API_Variety}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer las variedades');
        throw error
    });
};

export default {
    getVarieties,
    getVariety,
    newVariety,
    updateVariety,
    addVariety,
    removeVariety,
    deleteVariety
}