import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Memberships from "./pages/Memberships";
// import Catalog from "./pages/Catalog";
// import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
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
                <Link to="/memberships" className="nav-link text-white">Membresías</Link>
              </li>
              <li className="nav-item">
                <Link to="/catalog" className="nav-link text-white">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-white">Perfil</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido dinámico */}
        <main className="container flex-grow-1 py-4">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Profile />} /> */}
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