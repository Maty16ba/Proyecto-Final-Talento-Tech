import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RetroByte
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/computadoras" className="nav-links">
              Computadoras
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/consolas" className="nav-links">
              Consolas
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <CartWidget />
          {isAuthenticated ? (
            <button onClick={logout} className="nav-button">
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-button">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;