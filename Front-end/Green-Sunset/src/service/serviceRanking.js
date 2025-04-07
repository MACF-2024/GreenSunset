import axios from "axios";

const API_Ranking = 'http://localhost:4000/api/ranking';

const getRankings = () => {
    return axios.get(`${API_Ranking}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el ranking')
        throw error
    });
};

const newRanking = (userId, productId, rankingData) => {
    return axios.post(`${API_Ranking}/create/${userId}/product/${productId}`, rankingData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el ranking')
        throw error
    });
};

const updateRanking = (id, rankingData) => {
    return axios.put(`${API_Ranking}/update/${id}`, rankingData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el ranking')
        throw error
    });
};

const deleteRanking = id => {
    return axios.delete(`${API_Ranking}/delete/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el ranking')
        throw error
    });
};

export default {
    getRankings,
    newRanking,
    updateRanking,
    deleteRanking
};