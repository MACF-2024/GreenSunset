import React from 'react';
import { Container, Alert, ListGroup, Button } from 'react-bootstrap';

const Favorites = () => {
    const favorites = [{
        id: 1,
        name: "Aceite Medicinal S",
        price: 50000,
        description: "Aceite con 75% material puro - 12 ml"
    }, {
        id: 2,
        name: "Aceite Medicinal XL",
        price: 1350000,
        description: "Aceite con 75% material puro - 35 ml"
    }]

    return (
        <Container className="mt-4">
            <h2>Favoritos</h2>
            {favorites.length === 0 ? (
                <Alert variant="warning">No tienes elementos en favoritos.</Alert>
            ) : (
                <ListGroup>
                    {favorites.map((item, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                            {item.name}
                            {/* <Button variant="danger" onClick={() => handleRemoveFavorite(item.id)}> */}
                            <Button variant="danger" >
                                Eliminar
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
};

export default Favorites;