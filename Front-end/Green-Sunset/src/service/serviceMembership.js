import axios from "axios";

const API_Membership = 'http://localhost:4000/api/membership';

const getMemberships = () => {
    return axios.get(`${API_Membership}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer las membresias')
        throw error
    });
};

const getMembership = id => {
    return axios.get(`${API_Membership}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer la membresia')
        throw error
    });
};

const newMembership = (userId, membershipData) => {
    return axios.post(`${API_Membership}/create/${userId}`, membershipData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear la nueva membresia')
        throw error
    });
};

const updateMembership = (id, membershipData) => {
    return axios.put(`${API_Membership}/update/${id}`, membershipData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar la membresia')
        throw error
    });
};

const deleteMembership = (id, membershipData) => {
    return axios.put(`${API_Membership}/delete/${id}`, membershipData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al eliminar la membresia')
        throw error
    });
};

const getUsersMem = id => {
    return axios.get(`${API_Membership}/user/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los usuarios de la membresia')
        throw error
    });
};

export default {
    getMembership,
    getMemberships,
    newMembership,
    updateMembership,
    deleteMembership,
    getUsersMem
};