import axios from "axios";

const API_OrderDatail = 'http://localhost:4000/api/orderdetail';

const getOrderDetails = orderId => {
    return axios.get(`${API_OrderDatail}/all/${orderId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer los detalles de la ordenes')
        throw error
    });
};

const getOrderDetail = id => {
    return axios.get(`${API_OrderDatail}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer el detalle')
        throw error
    });
};

const newOrderDetail = (orderId, userId) => {
    return axios.post(`${API_OrderDatail}/create/${orderId}/user/${userId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para crear los detalles de la orden')
        throw error
    });
};

const updateOrderDetail = (id, orderDData) => {
    return axios.put(`${API_OrderDatail}/update/${id}`, orderDData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para actualizar los detalles de la orden')
        throw error
    });
};

const deleteOrderDetail = id => {
    return axios.delete(`${API_OrderDatail}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para eliminar los detalles de la orden')
        throw error
    });
};

const removeOrderDetail = (id, productId) => {
    return axios.delete(`${API_OrderDatail}/${id}/product/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para quitar el producto del detalle')
        throw error
    });
};

export default {
    getOrderDetail,
    getOrderDetails,
    newOrderDetail,
    updateOrderDetail,
    deleteOrderDetail,
    removeOrderDetail
};