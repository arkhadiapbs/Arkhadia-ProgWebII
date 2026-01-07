import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaHome, FaGamepad, FaUsers, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // 🔥 PEGA O USUÁRIO DO LOCALSTORAGE
    const usuarioSalvo = localStorage.getItem("user");
    if (usuarioSalvo) {
      setUser(JSON.parse(usuarioSalvo));
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src="/assets/logo.png" alt="Logo Arkhadia" className="logo" />
        <div className="logo-text">
          <span className="logo-title">ARKHADIA</span>
        </div>
      </div>

      <nav>
        <a href="/"><FaHome /> Home</a>
        <a href="/jogos"><FaGamepad /> Jogos</a>
        <a href="/comunidade"><FaUsers /> Comunidade</a>

        {/* 🔥 AQUI É A MÁGICA */}
        {!user ? (
          <a href="/login">
            <FaSignInAlt /> Login
          </a>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Sair
          </button>
        )}
      </nav>
    </header>
  );
}