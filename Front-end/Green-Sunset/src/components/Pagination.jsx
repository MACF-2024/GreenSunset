import React from "react";
import { Button } from "react-bootstrap";

const Pagination = () => {

    return (
        <div className="d-flex justify-content-center my-3">
            <Button
                variant="primary"
                className="mx-2"
                // onClick={() => changePage(currentPage - 1)}
                // disabled={currentPage === 1}
            >
                Anterior
            </Button>

            {/* <span className="align-self-center">Página {currentPage} de {totalPages}</span> */}
            <span className="align-self-center">Página 1 de 1</span>

            <Button
                variant="primary"
                className="mx-2"
                // onClick={() => changePage(currentPage + 1)}
                // disabled={currentPage === totalPages}
            >
                Siguiente
            </Button>
        </div>
    );
};

export default Pagination;