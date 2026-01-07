import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Comunidade from "./pages/Comunidade";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout
import Layout from "./components/Layout";

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas COM Header e Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/jogos"
          element={
            <Layout>
              <Jogos />
            </Layout>
          }
        />

        <Route
          path="/comunidade"
          element={
            <Layout>
              <Comunidade />
            </Layout>
          }
        />

        {/* Auth (sem layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;