import axios from "axios";

const API_Cart = 'http://localhost:4000/api/cart';

const getCarts = () => {
    return axios.get(`${API_Cart}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error en traer los carritos')
        throw error
    });
};

const getCart = id => {
    return axios.get(`${API_Cart}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error en traer el carrito')
        throw error
    });
};

const newCart = (userId, cartData) => {
    return axios.post(`${API_Cart}/create/${userId}`, cartData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error en crear el nuevo carrito')
        throw error
    });
};

const updateCart = (id, cartData) => {
    return axios.put(`${API_Cart}/update/${id}`, cartData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error en actualizar el carrito')
        throw error
    });
};

const deleteCart = id => {
    return axios.delete(`${API_Cart}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error en eliminar el carrito')
        throw error
    });
};

export default {
    getCart,
    getCarts,
    newCart,
    updateCart,
    deleteCart
};