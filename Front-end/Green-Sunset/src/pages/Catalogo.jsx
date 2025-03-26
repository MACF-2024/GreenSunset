import React from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Catalogo = () => {

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛍️ Nuestros Productos</h2>
      <div className="row g-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default Catalogo;