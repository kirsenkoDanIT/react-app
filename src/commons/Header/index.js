import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export const Header = props => {
  return (
    <header>
      <NavLink to="/" exact>
        <h1>Logo</h1>
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
