import axios from "axios";

const API_Residence = 'http://localhost:4000/api/residence';

const getResidences = () => {
    return axios.get(`${API_Residence}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer las residencias')
        throw error
    });
};

const getResidence = userId => {
    return axios.get(`${API_Residence}/${userId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer la residencia')
        throw error
    });
};

const newResidence = residenceData => {
    return axios.post(`${API_Residence}/create`, residenceData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear la residencia nueva')
        throw error
    });
};

const updateResidence = (id, residenceData) => {
    return axios.put(`${API_Residence}/update/${id}`, residenceData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar la residencia')
        throw error
    });
};

const deleteResidence = id => {
    return axios.delete(`${API_Residence}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al eliminar la residencia')
        throw error
    });
};

export default {
    getResidence,
    getResidences,
    newResidence,
    updateResidence,
    deleteResidence
};