import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { } from '../features/sliceCarts';

const Cart = () => {
    // const cartItems = useSelector(state => state.cart.items);
    // const dispatch = useDispatch();

    // Datos de prueba del carrito
    const cartItems = [
        { 
            id: 1, 
            name: "Membresía Gold", 
            price: 50, 
            quantity: 1 
        },{ 
            id: 2, 
            name: "Genética Kush", 
            price: 30, 
            quantity: 2 
        }
    ];

    // Calcular el total
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">🛒 Tu Carrito</h2>

            {cartItems.length === 0 ? (
                <div className="alert alert-warning text-center">Tu carrito está vacío</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead className="table-success">
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <input type="number" className="form-control w-50 mx-auto" value={item.quantity} readOnly />
                                    </td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Resumen del total */}
            <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light border rounded">
                <h4 className="mb-0">Total: ${total}</h4>
                <button className="btn btn-success">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Cart;