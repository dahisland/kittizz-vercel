import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <HashLink smooth to="/#kitties">
            Discover all our kitties
          </HashLink>
        </li>
        <li>
          <NavLink to="/about">How it works</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
