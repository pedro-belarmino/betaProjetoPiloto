import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/_sidebar.sass'

interface SidebarProps {
  isMenuOpen: boolean;
  isHomeSubMenuOpen: boolean;
  toggleHomeSubMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMenuOpen,
  isHomeSubMenuOpen,
  toggleHomeSubMenu,
}) => {
  return (
    <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        <li className={isHomeSubMenuOpen ? 'open' : ''}>
          <button className="submenu-toggle" onClick={toggleHomeSubMenu}>
            Home
            <span className={`arrow ${isHomeSubMenuOpen ? 'open' : ''}`}>▼</span>
          </button>
          <ul className={isHomeSubMenuOpen ? 'open' : ''}>
            <li><Link to="/home1">Home 1</Link></li>
            <li><Link to="/home2">Home 2</Link></li>
            <li><Link to="/home3">Home 3</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
