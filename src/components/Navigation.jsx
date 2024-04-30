import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/png-transparent-poke-ball-thumbnail.png';

const Navigation = () => {
  const links = [
    { path: "/", text: "Home" },
    { path: "/pokemones", text: "Pokemones" }
  ];

  const getNavLinkClass = ({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="PokeReact" height="30" />
        </NavLink>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            {links.map(link => (
              <NavLink key={link.path} to={link.path} className={getNavLinkClass}>
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
