import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateField, setError, resetForm } from "../redux/registerSlice";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Register = () => {
    const user = {
        name: "Marco Antonio",
        email: "marcocarballofrancia@gmail.com",
        password: "Marcuss1991",
        confirmPassword: "Marcuss1991"
    }

//   const dispatch = useDispatch();
//   const { name, email, password, confirmPassword, error } = useSelector(
//     (state) => state.register
//   );

  // Validar email con expresión regular
//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !confirmPassword) {
//       dispatch(setError("Todos los campos son obligatorios"));
//       return;
//     }
//     if (!isValidEmail(email)) {
//       dispatch(setError("El correo electrónico no es válido"));
//       return;
//     }
//     if (password !== confirmPassword) {
//       dispatch(setError("Las contraseñas no coinciden"));
//       return;
//     }

//     alert("Registro exitoso 🎉");
//     dispatch(resetForm());
//   };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Registro de Usuario</h2>

      {/* {error && <Alert variant="danger">{error}</Alert>} */}

      {/* <Form onSubmit={handleSubmit}> */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={user.name}
            // onChange={(e) =>
            //   dispatch(updateField({ name: "name", value: e.target.value }))
            // }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={user.email}
            // onChange={(e) =>
            //   dispatch(updateField({ name: "email", value: e.target.value }))
            // }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={user.password}
            // onChange={(e) =>
            //   dispatch(updateField({ name: "password", value: e.target.value }))
            // }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repita su contraseña"
            value={user.confirmPassword}
            // onChange={(e) =>
            //   dispatch(updateField({ name: "confirmPassword", value: e.target.value }))
            // }
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          {/* <Button variant="secondary" onClick={() => dispatch(resetForm())}> */}
          <Button variant="secondary">
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;