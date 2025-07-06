import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {

  const location = useLocation();


  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">⚽ BetPolix</Link>
      </div>
      <ul className="navbar__links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/matches' ? 'active' : ''}>
          <Link to="/matches">Partidos</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  )
}
