import axios from "axios";

const API_Crop = 'http://localhost:4000/api/crop';

const getCrops = () => {
    return axios.get(`${API_Crop}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los cultivos')
        throw error
    });
};

const getCrop = id => {
    return axios.get(`${API_Crop}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el cultivo')
        throw error
    });
};

const newCrop = cropData => {
    return axios.post(`${API_Crop}/create`, cropData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear el nuevo cultivo')
        throw error
    });
};

const updateCrop = (id, cropData) => {
    return axios.put(`${API_Crop}/update/${id}`, cropData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar el cultivo')
        throw error
    });
};

const deleteCrop = id => {
    return axios.delete(`${API_Crop}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al eliminar el cultivo')
        throw error
    });
};

export default {
    getCrop,
    getCrops,
    newCrop,
    updateCrop,
    deleteCrop
};