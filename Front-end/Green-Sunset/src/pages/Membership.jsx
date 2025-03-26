import React from 'react';
import { 
    Table, 
    Button, 
    Container, 
    Spinner, 
    Row,
    Col,
    Card
} from 'react-bootstrap';

const Membership = () => {
    const membership = {
        id: 1,
        name: "Plata",
        price: 90000,
        image: null,
        discount: 0,
        validation: true,
        description: "30 grs de producto vegetal o 20 ml de aceite medicinal"
    };

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Membresías del Club</h2>

            {/* {status === "loading" && <Spinner animation="border" className="d-block mx-auto" />} */}

            <Row className="gy-4">
                {/* {memberships.map((membership) => ( */}
                <Col key={membership.id} md={4}>
                    <Card className="shadow-lg text-center h-100">
                        <Card.Img variant="top" src={membership.image} alt={membership.name} style={{ height: "200px", objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title className="fw-bold">{membership.name}</Card.Title>
                            <Card.Text className="text-muted">{membership.description}</Card.Text>
                            <h4 className="text-primary">${membership.price}</h4>
                            <p className="text-danger fw-bold">Descuento: {membership.discount}%</p>
                            <Button variant="success">Registrarse</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>
        </Container>
    );

    // return (
    //     <Container className="py-5">
    //         <h2 className="text-center mb-4">Membresías del Club</h2>

    //         {/* {status === "loading" && <Spinner animation="border" className="d-block mx-auto" />} */}

    //         <Table striped bordered hover responsive>
    //             <thead className="table-dark">
    //                 <tr>
    //                     <th>Imagen</th>
    //                     <th>Nombre</th>
    //                     <th>Precio</th>
    //                     <th>Descuento</th>
    //                     <th>Descripción</th>
    //                     <th>Acción</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {/* {memberships.map((membership) => ( */}
    //                 <tr key={membership.id}>
    //                     <td>
    //                         <img src={membership.image} alt={membership.name} style={{ width: "80px", borderRadius: "8px" }} />
    //                     </td>
    //                     <td>{membership.name}</td>
    //                     <td>$ {membership.price}</td>
    //                     <td>{membership.discount}%</td>
    //                     <td>{membership.description}</td>
    //                     <td>
    //                         <Button variant="success">Registrarse</Button>
    //                     </td>
    //                 </tr>
    //                 {/* ))} */}
    //             </tbody>
    //         </Table>
    //     </Container>
    // );
};

export default Membership;