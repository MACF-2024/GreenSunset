import axios from "axios";

const API_ItemCart = 'http://localhost:4000/api/itemcart';

const getItemCarts = cartId => {
    return axios.get(`${API_ItemCart}/all/${cartId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los items del carrito')
        throw error;
    });
};

const getItemCart = id => {
    return axios.get(`${API_ItemCart}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el item del carrito')
        throw error;
    });
};

const newItemCart = (cartId, itemCartData) => {
    return axios.post(`${API_ItemCart}/create/${cartId}`, itemCartData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear el item del carrito')
        throw error;
    });
};

const updateItemCart = (id, itemCartData) => {
    return axios.put(`${API_ItemCart}/update/${id}`, itemCartData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar el item del carrito')
        throw error;
    });
};

const deleteItemCart = id => {
    return axios.delete(`${API_ItemCart}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el item del carrito')
        throw error;
    });
};

const addProduct = (id, productId) => {
    return axios.post(`${API_ItemCart}/${id}/product/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al agregar el item al carrito')
        throw error;
    });
};

const removeProduct = (id, productId) => {
    return axios.delete(`${API_ItemCart}/${id}/product/${productId}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al quitar el item del carrito')
        throw error;
    });
};

export default {
    getItemCart,
    getItemCarts,
    newItemCart,
    updateItemCart,
    deleteItemCart,
    addProduct,
    removeProduct,
};