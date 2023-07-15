import React from "react";
import Navigation from "../navigation/Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-page">
      <NavLink to="/">
        <h1>KiTtizZ</h1>
      </NavLink>
      <div className="header-nav">
        <Navigation />
        <div className="header-connexion">CONNEXION</div>
      </div>
    </header>
  );
};

export default Header;
