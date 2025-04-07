import axios from "axios";

const API_Order = 'http://localhost:4000/api/order';

const getOrders = () => {
    return axios.get(`${API_Order}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer las ordenes')
        throw error
    });
};

const getOrder = id => {
    return axios.get(`${API_Order}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer la orden')
        throw error
    });
};

const newOrder = (userId, orderData) => {
    return axios.post(`${API_Order}/create/${userId}`, orderData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear la nueva orden')
        throw error
    });
};

const updateOrder = (id, orderData) => {
    return axios.put(`${API_Order}/update/${id}`, orderData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar la orden')
        throw error
    });
};

const deleteOrder = id => {
    return axios.delete(`${API_Order}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al eliminar la orden')
        throw error
    });
};

export default {
    getOrder,
    getOrders,
    newOrder,
    updateOrder,
    deleteOrder
};