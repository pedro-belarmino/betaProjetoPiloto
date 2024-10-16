import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/_navbar.sass';

interface NavbarProps {
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Este é o ícone de três traços */}
      </button>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default Navbar;