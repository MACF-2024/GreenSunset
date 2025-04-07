import axios from "axios";

const API_Comment = 'http://localhost:4000/api/comment';

const getComments = () => {
    return axios.get(`${API_Comment}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los comentarios')
        throw error
    });
};

const getComment = id => {
    return axios.get(`${API_Comment}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el comentario')
        throw error
    });
};

const newComment = (userId, productId, commentData) => {
    return axios.post(`${API_Comment}/create/${userId}/${productId}`, commentData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear el comentario')
        throw error
    });
};

const updateComment = (id, commentData) => {
    return axios.put(`${API_Comment}/update/${id}`, commentData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar el comentario')
        throw error
    });
};

const deleteComment = id => {
    return axios.delete(`${API_Comment}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al eliminar el comentario')
        throw error
    });
};

export default {
    getComment,
    getComments,
    newComment,
    updateComment,
    deleteComment
};