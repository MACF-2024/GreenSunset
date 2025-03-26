import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './components/Cart';
import Card from './components/Card';
import Catalogo from './pages/Catalogo';
import Profile from './pages/Perfil';
import Membership from './pages/Membership';
// import Home from './pages/Home';
import Register from './components/Register';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column">
        {/* Navbar */}
        <header className="bg-success text-white py-3 shadow">
          <nav className="container d-flex justify-content-between align-items-center">
            <h1 className="h4 mb-0">
              <Link to="/" className="text-white text-decoration-none">Green-Sunset</Link>
            </h1>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link text-white">Favoritos</Link>
              </li>
              <li className="nav-item">
                <Link to="/memberships" className="nav-link text-white">Membresías</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white">Carrito</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-white">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link to="/card" className="nav-link text-white">Producto</Link>
              </li>
              <li className="nav-item">
                <Link to="/catalogo" className="nav-link text-white">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-white">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white">Registrarse</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido dinámico */}
        <main className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/memberships" element={<Membership />} />
            <Route path="/card" element={<Card />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/favorites" element={<Favorites />} /> 
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-4">
          <p className="mb-0">&copy; 2025 Cannabis Club. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;