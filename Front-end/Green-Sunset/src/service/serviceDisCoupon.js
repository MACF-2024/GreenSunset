import axios from "axios";

const API_DisCoupon = 'http://localhost:4000/api/coupon';

const getCoupones = () => {
    return axios.get(`${API_DisCoupon}/all`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los cupones de descuento')
        throw error
    });
};

const getCoupon = id => {
    return axios.get(`${API_DisCoupon}/${id}`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer el cupon de descuento')
        throw error
    });
};

const newCoupon = couponData => {
    return axios.post(`${API_DisCoupon}/create`, couponData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al crear un nuevo cupon de descuento')
        throw error
    });
};

const updateCoupon = (id, couponData) => {
    return axios.put(`${API_DisCoupon}/update/${id}`, couponData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al actualizar el cupon de descuento')
        throw error
    });
};

const deleteCoupon = (id, couponData) => {
    return axios.put(`${API_DisCoupon}/delete/${id}`, couponData)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al desvalidar el cupon de descuento')
        throw error
    });
};

const getProducts = id => {
    return axios.get(`${API_DisCoupon}/${id}/product`)
    .then(e => e.data)
    .catch(error => {
        console.error('Error al traer los productos del cupon de descuento')
        throw error
    });
};

// const getMembership = () => {
//     return axios.get(`${API_DisCoupon}/`)
//     .then(e => e.data)
//     .catch(error => {
//         console.error('Error al traer las membresias del cupon de descuento')
//         throw error
//     });
// };

export default {
    getCoupones,
    getCoupon,
    newCoupon,
    updateCoupon,
    deleteCoupon,
    getProducts
};