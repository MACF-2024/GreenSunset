import axios from "axios";

const API_Product = 'http://localhost:4000/api/product';

const getProducts = () => {
    return axios.get(`${API_Product}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer los productos')
        throw error
    });
};

const getProduct = id => {
    return axios.get(`${API_Product}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer el producto')
        throw error
    });
};

const newProduct = (cropId, productData) => {
    return axios.post(`${API_Product}/create/${cropId}`, productData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para crear al nuevo producto')
        throw error
    });
};

const updateProduct = (id, productData) => {
    return axios.put(`${API_Product}/update/${id}`, productData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para actualizar el producto')
        throw error
    });
};

const deleteProduct = (id, productData) => {
    return axios.put(`${API_Product}/delete/${id}`, productData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para desvalidar el producto')
        throw error
    });
};

const getComment = id => {
    return axios.get(`${API_Product}/comments/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer los comentarios del producto')
        throw error
    });
};

const getRanking = id => {
    return axios.get(`${API_Product}/ranking/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error para traer el ranking del producto')
        throw error
    });
};

export default {
    getProducts,
    getProduct,
    getComment,
    getRanking,
    updateProduct,
    deleteProduct,
    newProduct
}