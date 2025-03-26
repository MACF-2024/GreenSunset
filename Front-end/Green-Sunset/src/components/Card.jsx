import React from "react";

const Card = () => {
    const product = { 
        id: 1, 
        name: "Producto 1", 
        price: 10, 
        description: "Descripción 1", 
        image: "https://via.placeholder.com/200" 
    };

    return (
        <div className="col-md-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={product.image || "https://via.placeholder.com/200"}
                    className="card-img-top"
                    alt={product.name}
                    style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <h6 className="text-primary">${product.price}</h6>
                </div>
                <div className="card-footer text-center">
                    <button
                        className="btn btn-success w-100"
                        onClick={() => addToCart(product)}
                    >Agragar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Card;