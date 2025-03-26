import React from "react";

const Profile = () => {
  // Datos de prueba del usuario
  const user = {
    name: "Juan Pérez",
    email: "juanperez@email.com",
    membership: "Gold",
    address: "Av. Siempre Viva 123",
    phone: "+54 9 11 1234-5678",
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">👤 Mi Perfil</h2>

      <div className="card mx-auto shadow-lg" style={{ maxWidth: "500px" }}>
        <div className="card-body text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="rounded-circle mb-3"
          />
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text text-muted">{user.email}</p>
        </div>
      </div>

      <div className="mt-4">
        <h5 className="mb-3">📜 Información</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Membresía:</strong> {user.membership}
          </li>
          <li className="list-group-item">
            <strong>Dirección:</strong> {user.address}
          </li>
          <li className="list-group-item">
            <strong>Teléfono:</strong> {user.phone}
          </li>
        </ul>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary">Editar Perfil</button>
        <button className="btn btn-danger">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;